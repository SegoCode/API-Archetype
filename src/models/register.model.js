const Joi = require('joi');

const user = Joi.string();
const pass = Joi.string().min(5).max(15);
const email = Joi.string().email();

const registerSchema = Joi.object({
  user: user.required(),
  email: email.required(),
  pass: pass.required(),
});

module.exports =  registerSchema;
