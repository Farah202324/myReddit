-- in this file ur suppose to use api's for the fake data but at first let's just work with this

BEGIN,

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

ROLLBACK;
--C:/Users/farah/Desktop/MyReddit/server/database/config/fakedata.sql