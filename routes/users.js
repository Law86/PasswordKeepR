/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

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

  // All register routes
  router.get("/register", (req, res) => {
    res.render("register");
  });

  // POST route /register
  router.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const org = req.body.organization;
    const userParams = [username, password, org];

    const query = `INSERT INTO users (name, password, org)
      VALUES ($1, $2, $3)
      RETURNING *
      `;
    return db
      .query(query, userParams)
      .then((data) => {
        const loggedUser = data.rows[0];
        console.log("************************", loggedUser.id);
        req.session.user_id = loggedUser.id;
        res.redirect("/passwords");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return router;
};
