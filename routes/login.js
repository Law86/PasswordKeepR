const express = require("express");
const router = express.Router();
const cookieSession = require("cookie-session");
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

//make router
//function for returning the query for the give email
// const getUserByEmail = function(email) {
//   return db

// };
router.get('/', (req, res) => {
  res.render("login");
});
module.exports = (db) => {
  router.post('/', (req, res) => {
    const {email, passwordLogin} = req.body;
    console.log(email, passwordLogin);
    db.query(`SELECT * FROM users WHERE email = $1`,[email])
      .then((result) => {
        console.log(result.rows[0]);
        let userID = result.rows[0];
        //res.redirect('/');
      })
      .catch((error) => {
        return null;
      });
    $((userID, email, passwordLogin) => {
      $("form").on("submit", function(event) {
        event.preventDefault();
        if (userID.email !== email) {
          alert("Please register an account");
        }
        if(userID.password !== passwordLogin) {
          alert("Wrong password, please type in correct password");
        }
        const id = req.session.userID;
      })
    })

  });
  return router;
};

module.exports = router;
