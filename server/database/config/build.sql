BEGIN;
DROP TABLE IF EXISTS users, posts, comments, votes;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    profile_picture VARCHAR(255)
);


CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_url VARCHAR(255),
    user_id INTEGER REFERENCES users(id)

);

-- CREATE TABLE comments (
--     id SERIAL PRIMARY KEY,
--     content TEXT NOT NULL,
--     user_id INTEGER REFERENCES users(id),
--     post_id INTEGER REFERENCES posts(id),
--     created_at TIMESTAMP NOT NULL DEFAULT NOW()
-- );

CREATE TABLE votes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id),
    value INTEGER NOT NULL,
    CONSTRAINT one_vote_per_user_per_post UNIQUE (user_id, post_id) 
    --This means that the combination of user_id and post_id must be unique across all rows in the votes table. 
    --So a given user can only vote once on a given post, preventing duplicate votes from the same user on the same post.
    -- If a user tries to vote twice on the same post, the database will throw an error due to the unique constraint violation.
);

-- C:/Users/farah/Desktop/reddit/MyReddit/server/database/config/build.sql
INSERT INTO users (username, email, password, profile_picture)
VALUES 
    ('john_doe', 'john_doe@example.com', 'password123', 'https://randomuser.me/api/portraits/men/1.jpg'),
    ('jane_doe', 'jane_doe@example.com', 'password456', 'https://randomuser.me/api/portraits/women/2.jpg'),
    ('bob_smith', 'bob_smith@example.com', 'password789', 'https://randomuser.me/api/portraits/men/3.jpg');

-- Insert posts
INSERT INTO posts (title, content, user_id)
VALUES
    ('My first post', 'Hello world!', 1),
    ('My second post', 'Lorem ipsum dolor sit amet', 2),
    ('My third post', 'Consectetur adipiscing elit', 3);

-- Insert votes
INSERT INTO votes (user_id, post_id, value)
VALUES
    (1, 2, 1),
    (2, 3, 1),
    (3, 1, -1),
    (1, 3, 1),
    (2, 1, -1);
COMMIT;