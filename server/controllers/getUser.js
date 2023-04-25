const bcrypt = require('bcrypt');
const joi = require('joi');
const { generateToken } = require('../utilities/jwt');
const { getUser } = require('../database/queries');

const schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(4).required(),
});

const login = async (req, res) => {
  try {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({ error: error.details.map((err) => err.message) });
    }
    const { email, password } = value;
    const user = await getUser(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const payload = { id: user.id, email: user.email };
    const token = await generateToken(payload);
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ message: 'Successfully logged in', user: { id: user.id, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = login;
