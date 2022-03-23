const router = require('express').Router();
const libro = require('./libro/libro.router');
const root = require('./root.router');
const swagger = require('./swagger/swagger.router');
const auth = require('./auth');


router.use('/libros', libro);
router.use('/auth', auth);
router.use('/api-docs', swagger);
router.use('/', root);

module.exports = router;
