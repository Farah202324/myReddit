const Joi = require('joi');

const signUpSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  email: Joi.string().trim().email().max(30)
    .required(),
  password: Joi.string().min(6).max(30).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().trim().email().max(30)
    .required(),
  password: Joi.string().min(6).max(30).required(),
});

module.exports = { signUpSchema, loginSchema };
