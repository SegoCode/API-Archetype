//Los endpoint estaticos van antes que los dinamicos
const router = require('express').Router();
const MangaService = require('../services/mangas.service');
const Messages = require('./../models/message.model');
const validatorHandler = require('./../middlewares/validator.handler');
const { createMangaSchema, updateMangaSchema, getMangaSchema } = require('./../models/manga.model');

const service = new MangaService();

//GET
router.get('/search', function (req, res) {
  //El response no sale de aqui
  const { name } = req.query;

  res.json(service.findByName(name));
});

router.get('/', function (req, res) {
  const { top } = req.query;
  const total = top || 25;

  res.json(service.find());
});

router.get('/:id', function (req, res) {
  const id = req.params.id;
  res.json(service.findById(id));
});

//POST
router.post('/', function (req, res) {
  const validation = createMangaSchema.validate(req.body);
  if (typeof validation.error === 'undefined') {
    res.json(service.create(req.body));
  } else {
    res.status(Messages.BAD_REQUEST).json(Messages.RESPOND_BAD_REQUEST(validation.error.message));
  }
});

//PUT
router.put('/', function (req, res) {
  const jsonBody = req.body;

  res.json(service.update(jsonBody));
});

//DELETE
router.delete('/:id', function (req, res) {
  res.json(service.delete(req.params.id));
});

module.exports = router;
