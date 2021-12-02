const router = require('express').Router();
const mangas = require('./mangas.router');
const messages = require('../models/message.model');

router.use('/mangas', mangas);

router.get('/', function (req, res) {
  res.status(messages.OK_CODE).json(messages.RESPOND_OK_CUSTOM("Consulta la documentacion de la API:"));
});

module.exports = router;
