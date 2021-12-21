CREATE DATABASE Tasks;

USE Backend_development;
SELECT * FROM users;
SELECT * FROM tasks;
SELECT * FROM tags;

-- test insertion of unique email
INSERT INTO users (id, name, email, password, created_at, updated_at)
VALUES (10, "Terry", "terry@gmail.com", "hellohi", NOW(), NOW());