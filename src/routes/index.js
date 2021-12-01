const router = require('express').Router();
const mangas = require('./mangas.router');
const Messages = require('../models/message.model');

router.use('/mangas', mangas);

router.get('/', function (req, res) {
  res.status(Messages.OK_CODE).json(Messages.RESPOND_OK_CUSTOM("Consulta la documentacion de la API:"));
});

module.exports = router;
