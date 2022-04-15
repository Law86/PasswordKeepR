SELECT
        id,
        website,
        username,
        password,
        categories.category as category
  FROM categories
  JOIN passwords ON categories.id = category_id
  WHERE user_id = 1;
-- TODO -- make user_id a dynamic input
