const express = require("express");
const router = express.Router();

// add gets for other routes to render

// GET route /new_password
router.get("/new_password", (req, res) => {
  res.render("new_password");
});

// POST route /passwords
router.get("/passwords", (req, res) => {
  res.render("passwords");
});

module.exports = router;
