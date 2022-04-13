const express = require("express");
const router = express.Router();

// GET route /register
router.get("/register", (req, res) => {
  res.render("register");
});

// POST route /register
router.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const org = req.body.organization;
  const userParams = [username, password, org];

  const query = `INSERT INTO users (username, password, org)
    VALUES ($1, $2, $3)
    RETURNING *
    `;
  return db
    .query(query, userParams)
    .then((data) => {
      const loggedUser = data.rows[0];
      req.session.user_id = user.id;
      res.redirect("/passwords");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
