const router = require('express').Router();
const loginService = require('../../services/login.service');
const messages = require('../../Utils/message.utils');
const reqAuth = require('../../middlewares/auth.handler');

const { authenticateSchema, refreshteSchema } = require('../../models/login.model');

const service = new loginService();

//POST
router.post('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
  const validation = authenticateSchema.validate(req.body);
  if (typeof validation.error === 'undefined') {
    res.json(service.authenticate(req.body));
  } else {
    res.status(messages.BAD_REQUEST).json(messages.RESPOND_BAD_REQUEST(validation.error.message));
  }
});

router.post('/refresh', reqAuth.authRole(reqAuth.ROLE.LOGGED), function (req, res) {
  const validation = refreshteSchema.validate(req.body);
  if (typeof validation.error === 'undefined') {
    res.json(service.refreshteSchema(req.body));
  } else {
    res.status(messages.BAD_REQUEST).json(messages.RESPOND_BAD_REQUEST(validation.error.message));
  }
});

module.exports = router;
