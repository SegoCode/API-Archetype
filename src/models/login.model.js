const Joi = require('joi');

const user = Joi.string();
const pass = Joi.string();
const token = Joi.string();

const authenticateSchema = Joi.object({
  user: user.required(),
  pass: pass.required(),
});

const refreshteSchema = Joi.object({
  token: token.required(),
});

module.exports = { authenticateSchema, refreshteSchema };
