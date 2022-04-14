const express = require('express');
const router  = express.Router();

// HELPER FUNCTIONS
/**
 * Edit password information
 *
 * Filter by category (AJAX) XXX frontend
 *
 * Clipboard API XXX frontend
 */

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
    // const { user_id } = req.session;

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

  // read all - GET
  router.get("/", (req, res) => {
    db.query(`
      SELECT  website,
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
  // router.get("/", (res, req) => {
  //   // const { category } = res.body;
  //   console.log('res.body', res.body);

  //   let category_id = null;

  //   if (category === 'null') {
  //     category_id = 1;
  //   } else if (category === 'social') {
  //     category_id = 2;
  //   } else if (category === 'entertainment') {
  //     category_id = 3;
  //   } else if (category === 'productivity') {
  //     category_id = 4;
  //   } else if (category === 'banking') {
  //     category_id = 5;
  //   } else if (category === 'health_wellness') {
  //     category_id = 6;
  //   } else if (category === 'misc') {
  //     category_id = 7;
  //   }

  //   const user_id = 1; // remove when cookie sessions ok
  //   // TODO uncomment when cookie session implemented
  //   // const { user_id } = req.session;

  //   db.query(`
  //   SELECT  website,
  //           username,
  //           password,
  //           categories.category as category
  //     FROM categories
  //     JOIN passwords ON categories.id = category_id
  //     WHERE user_id = $1
  //     AND category_id = $2;
  //   `, [user_id, category_id])
  //   .then(data => {
  //     const passwords = data.rows;
  //     return res.render("passwords", { passwords });
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });
  // });

  // update - PUT

  // delete - DELETE


  return router;
};
