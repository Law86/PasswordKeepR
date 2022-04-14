DROP TABLE IF EXISTS passwords CASCADE;

CREATE TABLE passwords (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  category_id INTEGER REFERENCES categories(id),
  password VARCHAR(128) NOT NULL,
  website VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL
);
