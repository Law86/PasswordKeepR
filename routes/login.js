const express = require("express");
const router = express.Router();



module.exports = (db) => {
  //getting the page
  router.get('/', (req, res) => {
    res.render("login");
  });
  //getting info from the form
  router.post('/', (req, res) => {
    const {email,user_password} = req.body;
    db.query(`SELECT * FROM users WHERE email = $1`,[email])
      .then((result) => {
        let user = result.rows[0];
        if (user.email !== email) {
          return res.send("<h3>Email not found, Please regesiter</h3>");
        }
        if (user.password !== user_password) {
          return res.send("<h3>Wrong password, please type in correct password</h3>");
        }
        user = req.session.user;
        return res.redirect("/api/passwords");
      })
      .catch((error) => {
        return null;
      });
  });
  return router;
};

