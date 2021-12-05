const router = require('express').Router();
const messages = require('../../models/message.model');
const reqAuth = require('../../middlewares/auth.handler');

const { registerSchema } = require('../../models/register.model');

//POST
router.post('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
  const validation = registerSchema.validate(req.body);
  if (typeof validation.error === 'undefined') {
    res.json(service.registerSchema(req.body));
  } else {
    res.status(messages.BAD_REQUEST).json(messages.RESPOND_BAD_REQUEST(validation.error.message));
  }
});

module.exports = router;
