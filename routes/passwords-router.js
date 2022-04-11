const express = require('express');
const router  = express.Router();

// HELPER FUNCTIONS
/**
 * Edit password information (AJAX)
 *
 * Filter by category (AJAX) XXX frontend
 *
 * Create new password XXX part of new_password route
 *
 * Clipboard API XXX frontend
 */


// GET /passwords

// module.exports = router;

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
