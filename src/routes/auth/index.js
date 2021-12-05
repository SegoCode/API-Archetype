const router = require('express').Router();
const login = require('./login.router');
const register = require('./register.router');

router.use('/login', login);
router.use('/register', register);

module.exports = router;
