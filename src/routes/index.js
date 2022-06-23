const router = require('express').Router();
const book = require('./book/book.router');
const root = require('./root.router');
const swagger = require('./swagger/swagger.router');
const auth = require('./auth');


router.use('/book', book);
router.use('/auth', auth);
router.use('/api-docs', swagger);
router.use('/', root);

module.exports = router;
