SELECT  website,
        username,
        password,
        categories.category as category
  FROM categories
  JOIN passwords ON categories.id = category_id
  WHERE user_id = 1
    AND category_id = 5;

-- TODO -- make user_id and category_id dynamic inputs.
