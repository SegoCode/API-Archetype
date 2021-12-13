const Joi = require('joi');

const user = Joi.string();
const pass = Joi.string();
const token = Joi.string();

const authenticateSchema = Joi.object({
  user: user.required(),
  pass: pass.required(),
});

module.exports = authenticateSchema;
