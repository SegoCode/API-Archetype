const router = require('express').Router();
const libroService = require('../../services/libro.service');
const messages = require('../../utils/message.utils');
const reqAuth = require('../../middlewares/auth.handler');

const { createLibroSchema, updateLibroSchema, deleteLibroSchema } = require('../../models/libro.model');

const service = new libroService();

//GET
router.get('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), async function (req, res) {
  //NOTE: Confirm query validation with joi
  const { top } = req.query;
  const total = top || 10;
  res.json(await service.find());
});

//POST
router.post('/', reqAuth.authRole(reqAuth.ROLE.ADMIN), async function (req, res) {
  const validation = createLibroSchema.validate(req.body);
  if (typeof validation.error === 'undefined') {
    res.json(service.create(req.body));
  } else {
    res.status(messages.BAD_REQUEST).json(messages.RESPOND_BAD_REQUEST(validation.error.message));
  }
});

//PUT
router.put('/', reqAuth.authRole(reqAuth.ROLE.LOGGED), async function (req, res) {
  const validation = updateLibroSchema.validate(req.body);
  if (typeof validation.error === 'undefined') {
    res.json(service.update(req.body));
  } else {
    res.status(messages.BAD_REQUEST).json(messages.RESPOND_BAD_REQUEST(validation.error.message));
  }
});

//DELETE
router.delete('/:id', reqAuth.authRole(reqAuth.ROLE.ADMIN), async function (req, res) {
  const validation = deleteLibroSchema.validate(req.params);
  if (typeof validation.error === 'undefined') {
    res.json(service.delete(req.params.id));
  } else {
    res.status(messages.BAD_REQUEST).json(messages.RESPOND_BAD_REQUEST(validation.error.message));
  }
});

module.exports = router;
