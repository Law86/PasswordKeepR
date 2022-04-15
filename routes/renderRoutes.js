const express = require("express");
const router = express.Router();

// GET /
router.get("/", (req, res) => {
  res.redirect("login");
});

// GET /login
router.get("/login", (req, res) => {
  res.render("login");
});

// GET /register
router.get("/register", (req, res) => {
  res.render("register");
});

// GET /new_password
router.get("/new_password", (req, res) => {
  res.render("new_password");
});

// GET /passwords
router.get("/passwords", (req, res) => {
  res.render("passwords");
});

module.exports = router;
