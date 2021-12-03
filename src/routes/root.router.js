const router = require('express').Router();
const messages = require('../models/message.model');
const reqAuth = require('../middlewares/auth.handler');

//GET
router.get('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
  res.status(messages.OK_CODE).json(messages.RESPOND_OK_CUSTOM('Consult API documentation:'));
});

module.exports = router;
