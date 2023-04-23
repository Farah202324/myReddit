/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const bcrypt = require('bcrypt');
const joi = require('joi');
const { generateToken } = require('../jwt');
const { getUser, validatePassword } = require('../database/queries');

const schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(4).required(),
});

const getUsers = (req, res) => {
  schema.validate(req.body, { abortEarly: false });
  const { email, password } = req.body;
  getUser(email, password)
    .then((user) => {
      if (user.rows.length < 1) {
        throw new Error('not found');
      } else {
        return user;
      }
    })
    .then((data) => {
      const userData = data.rows[0];
      validatePassword(userData.email, password)
        .then((pass) => {
          bcrypt.compare(password, pass.rows[0].password)
            .then((compare) => {
              if (!compare) {
                return res.status(401).json({ ERROR: 'Incorrect Password!' });
              }
              res.cookie('username', userData.username);
              res.cookie('email', userData.email);
              generateToken(res, { email: userData.email, username: userData.username, id: userData.id });
            });
        });
    })
    .catch((err) => res.status(401).json({ ERROR: 'Internal server error' }));
};

module.exports = getUsers;
