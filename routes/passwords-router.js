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


// GET /passwords

// GET /passwords/:id


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM passwords;`)
      .then(data => {
        const passwords = data.rows;
        res.json({ passwords });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
