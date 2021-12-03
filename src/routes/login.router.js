const router = require('express').Router();
const loginService = require('../services/login.service');
const messages = require('../models/message.model');
const reqAuth = require('../middlewares/auth.handler');

const { authenticateSchema, refreshteSchema } = require('./../models/login.model');

const service = new loginService();

//POST
router.post('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {

});

router.post('/refresh', reqAuth.authRole(reqAuth.ROLE.LOGGED), function (req, res) {
    
});

module.exports = router;
