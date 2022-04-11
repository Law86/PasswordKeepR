DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  password_id INTEGER REFERENCES passwords(id) DELETE ON CASCADE,
  category TEXT 
);