const express = require("express");
const router = express.Router();

// HELPERS TO MAKE
// Add user to database

const createUser = (db, userInfo) => {
  const { id, email, password } = userInfo;

  if (!email || !password) {
    return { error: "400 Bad Request - Invalid credentials!", data: null }
  }

  const users = Object.values(userDatabase)
  const userFound = users.find(user => user.email === email)

  if (userFound) {
    return { error: "400 Bad Request - User Already Exists!", data: null}
  }

  const newUser = { id, email, password };
  userDatabase[id] = newUser;
  return { error: null, data: newUser };

}


// GET route /register
router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;