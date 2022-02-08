const jwt = require('jsonwebtoken');
const messages = require('../utils/message.utils');

const keySign = process.env.JWT_KEY;

const ROLE = {
	ADMIN: '3',
	LOGGED: '2',
	PUBLIC: '1',
};

function authRole(role) {
	return (req, res, next) => {
		let token = '';
		if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
			token = req.headers.authorization.split(' ')[1];
		}
		if (role !== ROLE.PUBLIC) {
			jwt.verify(token, keySign, (err, user) => {
				if (err || user.role < role) {
					return res.status(messages.UNAUTHORIZED_CODE).json(messages.RESPOND_UNAUTHORIZED());
				} else {
					next();
				}
			});
		} else {
			next();
		}
	};
}

module.exports = { authRole, ROLE };
