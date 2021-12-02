//Los endpoint estaticos van antes que los dinamicos
const router = require('express').Router();
const MangaService = require('../services/mangas.service');
const messages = require('./../models/message.model');
const { createMangaSchema, updateMangaSchema, getMangaSchema } = require('./../models/manga.model');

const service = new MangaService();

//GET
router.get('/', function (req, res) {
  const { top } = req.query;
  const total = top || 10;
  res.json(service.find());
});

//POST
router.post('/', function (req, res) {
  const validation = createMangaSchema.validate(req.body);
  if (typeof validation.error === 'undefined') {
    res.json(service.create(req.body));
  } else {
    res.status(messages.BAD_REQUEST).json(messages.RESPOND_BAD_REQUEST(validation.error.message));
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
