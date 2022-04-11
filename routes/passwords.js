const express = require('express');
const router  = express.Router();

// HELPER FUNCTIONS
/**
 * Edit password information (AJAX)
 *
 * Filter by category (AJAX)
 *
 * Create new password XXX part of new_password route
 *
 * Clipboard API
 */

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM passwords;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
