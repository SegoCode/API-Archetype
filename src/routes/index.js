const router = require('express').Router();
const mangas = require('./mangas.router');
const login = require('./login.router');
const reqAuth = require('../middlewares/auth.handler');
const messages = require('../models/message.model');

router.use('/mangas', mangas);
router.use('/login', login);

router.get('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
  res.status(messages.OK_CODE).json(messages.RESPOND_OK_CUSTOM('Consulta la documentacion de la API:'));
});

module.exports = router;
