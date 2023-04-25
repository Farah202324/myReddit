/* eslint-disable camelcase */
const { addPost } = require('../database/queries');

const addPosts = async (req, res) => {
  try {
    const { title, content, image_url } = req.body;
    const result = await addPost(title, content, image_url);
    res.redirect('/authorized');
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

module.exports = addPosts;
