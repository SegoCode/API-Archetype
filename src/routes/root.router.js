const router = require('express').Router();
const messages = require('../utils/message.utils');
const reqAuth = require('../middlewares/auth.handler');

var path = require('path');

//GET
router.get('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
	//TODO: Generate swagger documentation
	res.status(messages.OK_CODE).json(messages.RESPOND_OK_CUSTOM('Consult API documentation:'));
});

//The relative path is blocked by Node.js, this is a bypass,
//To prevent injections in sendFile() function use file name like endpoint 
router.get('/.well-known/security.txt', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
	//Security file for blackHats, see more: https://securitytxt.org/
	//https://www.google.com/.well-known/security.txt
  	res.sendFile('security.txt', { root: path.resolve('./src/.well-known') });
});

router.get('/.well-known/humans.txt', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
	//Thank to all the participants of this project, see more: https://humanstxt.org/ES
	//https://www.google.com/humans.txt
	res.sendFile('humans.txt', { root: path.resolve('./src/.well-known') });
});

module.exports = router;
