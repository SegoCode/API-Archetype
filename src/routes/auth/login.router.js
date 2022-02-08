const router = require('express').Router();
const jwt = require('jsonwebtoken');
const loginService = require('../../services/login.service');
const messages = require('../../utils/message.utils');
const reqAuth = require('../../middlewares/auth.handler');
const authenticateSchema = require('../../models/login.model');

const service = new loginService();

const keySign = process.env.JWT_KEY;

const configExpiration = {
	expiresIn: '2h',
};

//POST
router.post('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), async function (req, res) {
	const validation = authenticateSchema.validate(req.body);
	if (typeof validation.error === 'undefined') {
		//TODO: async service response role and user data
		await service.authenticate(req.body);

		configAccess = { role: reqAuth.ROLE.ADMIN };

		const token = jwt.sign(configAccess, keySign, configExpiration);
		res.json({ token: token });
	} else {
		res.status(messages.BAD_REQUEST).json(messages.RESPOND_BAD_REQUEST(validation.error.message));
	}
});

router.get('/refresh', reqAuth.authRole(reqAuth.ROLE.LOGGED), async function (req, res) {
	let decoded = jwt.decode(req.headers.authorization.split(' ')[1]);

	configAccess = { role: decoded.role };

	const token = jwt.sign(configAccess, 'your-256-bit-secret', configExpiration);
	res.json({ token: token });
});

module.exports = router;
