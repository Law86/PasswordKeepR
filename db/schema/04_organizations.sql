DROP TABLE IF EXISTS organizations CASCADE;

CREATE TABLE organizations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) 
);