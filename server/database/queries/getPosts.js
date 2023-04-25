const connection = require('../config/connection');

const getPosts = () => connection.query(`SELECT users.username, users.profile_picture, posts.title, posts.content, posts.image_url, votes.value 
FROM users 
JOIN posts ON users.id = posts.user_id 
LEFT JOIN votes ON posts.id = votes.post_id ;`);

module.exports = getPosts;
