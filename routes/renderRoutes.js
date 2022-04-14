const express = require("express");
const router = express.Router();

// -- TODO -- uncomment when code is merged
// router.get("/", (req, res) => {
//   res.redirect("login");
// });

// router.get("/login", (req, res) => {
//   res.render("login");
// });

// router.get("/register", (req, res) => {
//   res.render("register");
// });

// GET route /new_password
router.get("/new_password", (req, res) => {
  res.render("new_password");
});

// POST route /passwords
router.get("/passwords", (req, res) => {
  res.render("passwords");
});

module.exports = router;

