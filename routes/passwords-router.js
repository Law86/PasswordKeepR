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
  // create - POST
  router.post('/', (req, res) => {
    const {
      website,
      username,
      category,
      password
    } = req.body;

    let category_id = null;

    if (category === 'null') {
      category_id = 1;
    } else if (category === 'social') {
      category_id = 2;
    } else if (category === 'entertainment') {
      category_id = 3;
    } else if (category === 'productivity') {
      category_id = 4;
    } else if (category === 'banking') {
      category_id = 5;
    } else if (category === 'health_wellness') {
      category_id = 6;
    } else if (category === 'misc') {
      category_id = 7;
    }

    const user_id = 1; // remove when cookie sessions ok
    // TODO uncomment when cookie session implemented
    //const { user_id } = req.session;

    db.query(`INSERT INTO passwords (
      user_id,
      category_id,
      password,
      website,
      username)
    VALUES (
      $1,
      $2,
      $3,
      $4,
      $5
    ) RETURNING *
    `, [user_id, category_id, password, website, username])
      .then(data => {
        return res.redirect("passwords");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  //edit passwords router to update sql database
  router.post("/edit-passwords" , (req,res) => {
    const { user_id } = req.session;
    console.log(req.body.password);
    db.query(`UPDATE passwords SET password = $1 WHERE id = $2;`, [req.body.password, user_id]);
    res.redirect("/passwords");
  });
  // read all - GET
  router.get("/", (req, res) => {
    db.query(`
      SELECT  passwords.id AS id,
              website,
              username,
              password,
              categories.category as category
        FROM categories
        JOIN passwords ON categories.id = category_id
        WHERE user_id = 1;`)
      .then(data => {
        const passwords = data.rows;

        res.render('passwords', { passwords });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  // read one - GET /:id

  // update - PUT

  // delete - DELETE


  return router;
};
