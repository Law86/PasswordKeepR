/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // POST route /register
  router.post("/", (req, res) => {
    const username = req.body.username;
    const hashedPass = bcrypt.hashSync(req.body.password, 10);
    const org = req.body.organization;
    const userParams = [username, hashedPass, org];

    const query = `INSERT INTO users (name, password, org)
      VALUES ($1, $2, $3)
      RETURNING *
      `;
    const query2 = `SELECT * FROM organizations WHERE name = $1`;
    const query3 = `INSERT INTO organizations (name)
    VALUES ($1)
    RETURNING *
    `;
    db 
      .query(query2, [org])
      .then((data) => {
        if (data.rows.length === 0) {
          db.query(query3, [org]).then((response) => {
            db.query(query, [username, hashedPass, response.rows[0].id]).then(
              (data) => {
                const loggedUser = data.rows[0];
                console.log("New User Added:", loggedUser.id);
                req.session.user_id = loggedUser.id;
                res.redirect("/passwords");
              }
            ).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        } else {
          db.query(query, [username, hashedPass, data.rows[0].id]).then(
            (data) => {
              const loggedUser = data.rows[0];
              console.log("New User Added:", loggedUser.id);
              req.session.user_id = loggedUser.id;
              res.redirect("/passwords");
            }
          ).catch((err) => {
            console.log(err);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return router;
};
