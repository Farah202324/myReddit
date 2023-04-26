const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { loginSchema } = require('../validation/schema');
const loginQuery = require('../database/queries/login');

const generateToken = (payload) => jwt.sign(payload, process.env.SECRET_KEY);

const login = async (req, res) => {
  const { email, password } = req.body;
  const { error, value } = loginSchema.validate({ email, password }, { abortEarly: false });

  if (error) {
    return res.status(400).json({ error: true, message: error.details });
  }

  try {
    const data = await loginQuery(email);

    if (data.rowCount === 0) {
      return res.status(401).json({ error: true, message: 'SignUp first' });
    }

    const {
      id, username, password: hashedPassword,
    } = data.rows[0];
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordValid) {
      return res.status(400).json({ error: true, message: 'Wrong password' });
    }

    const token = generateToken({ id, username});
    res.cookie('token', token, { httpOnly: true }).json({ error: false, message: 'Login successful', id: id });
  } catch (error) {
    console.error('Error during login', error);
    return res.status(500).json({ error: true, message: 'Internal server error' });
  }
};

module.exports = login;
