const express = require("express");
const router = express.Router();





module.exports = (db) => {
  //getting the page
  router.get('/', (req, res) => {
    res.render("login");
  });
  //getting info from the form
  router.post('/', (req, res) => {
    const {name, password, org} = req.body;
    db.query(`SELECT * FROM users WHERE name = $1`,[name])
      .then((result) => {
        let user = result.rows[0];
        if (user.name !== name) {
          return res.send("<h3>Email not found, Please regesiter</h3>");
        }
        if (user.password !== password) {
          return res.send("<h3>Wrong password, please type in correct password</h3>");
        }
        if (user.org !== org) {
          return res.send("<h3>Organistaion not registered or yout not part of the organisation</h3>");
        }
        user = req.session.user;
        return res.redirect("/passwords");
      })
      .catch((error) => {
        return null;
      });
  });
  return router;
};

