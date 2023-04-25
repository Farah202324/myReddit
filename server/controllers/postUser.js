const bcrypt = require('bcrypt');
const { signUpSchema } = require('../validation/schema');
const addUser = require('../database/queries/addUser');

const postUser = (req, res) => {
  const { username, email, password } = req.body;

  signUpSchema
    .validateAsync({ username, email, password }, { abortEarly: false })
    .then(() => {
      bcrypt.hash(password, 10)
        .then((hashedPassword) => {
          addUser(username, email, hashedPassword)
            .then(() => {
              res.status(201).json({
                error: false,
                data: {
                  message: 'done',
                },
              });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).json({
                error: true,
                data: {
                  message: 'error at post user',
                },
              });
            });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({
            error: true,
            data: {
              message: 'hashing error',
            },
          });
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({
        error: true,
        data: {
          message: 'Invalid data',
        },
      });
    });
};

module.exports = postUser;
