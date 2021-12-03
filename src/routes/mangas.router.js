const router = require('express').Router();
const mangaService = require('../services/mangas.service');
const messages = require('../models/message.model');
const reqAuth = require('../middlewares/auth.handler');

const { createMangaSchema, updateMangaSchema, deleteMangaSchema } = require('./../models/manga.model');

const service = new mangaService();

//GET
router.get('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
  //comprobar si la validacion de query es igual que la de body
  const { top } = req.query;
  const total = top || 10;
  res.json(service.find());
});

//POST
router.post('/', reqAuth.authRole(reqAuth.ROLE.ADMIN), function (req, res) {
  const validation = createMangaSchema.validate(req.body);
  if (typeof validation.error === 'undefined') {
    res.json(service.create(req.body));
  } else {
    res.status(messages.BAD_REQUEST).json(messages.RESPOND_BAD_REQUEST(validation.error.message));
  }
});

//PUT
router.put('/', reqAuth.authRole(reqAuth.ROLE.LOGGED), function (req, res) {
  const validation = updateMangaSchema.validate(req.body);
  if (typeof validation.error === 'undefined') {
    res.json(service.update(req.body));
  } else {
    res.status(messages.BAD_REQUEST).json(messages.RESPOND_BAD_REQUEST(validation.error.message));
  }
});

//DELETE
router.delete('/:id', reqAuth.authRole(reqAuth.ROLE.ADMIN), function (req, res) {
  const validation = deleteMangaSchema.validate(req.params);
  if (typeof validation.error === 'undefined') {
    res.json(service.delete(req.params.id));
  } else {
    res.status(messages.BAD_REQUEST).json(messages.RESPOND_BAD_REQUEST(validation.error.message));
  }
});

module.exports = router;
