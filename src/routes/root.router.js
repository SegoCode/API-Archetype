const router = require('express').Router();

const messages = require('../utils/message.utils');
const reqAuth = require('../middlewares/auth.handler');

router.get('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
	res.status(messages.OK_CODE).json(messages.RESPOND_OK_CUSTOM('Consult API documentation: /api-docs'));
});

module.exports = router;
