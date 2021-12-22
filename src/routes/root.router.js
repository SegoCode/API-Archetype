const router = require('express').Router();
const messages = require('../utils/message.utils');
const reqAuth = require('../middlewares/auth.handler');

//GET
router.get('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
	//TODO: Generate swagger documentation
	res.status(messages.OK_CODE).json(messages.RESPOND_OK_CUSTOM('Consult API documentation:'));
});

router.get('/security', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
  //FIXME: server this file, must be absolute path
	res.sendFile('../.well-known/security.txt');
});

module.exports = router;
