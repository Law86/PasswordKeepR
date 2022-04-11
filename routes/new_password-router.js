const express = require("express");
const router = express.Router();

// HELPERS TO MAKE
// Password generator function

// GET route /new_password
router.get("/", (req, res) => {
  res.render("new_password");
});

// POST route /passwords
router.post("/", (req, res) => {
  res.redirect("/passwords");
});

module.exports = router;
