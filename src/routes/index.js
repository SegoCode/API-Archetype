const router = require('express').Router();
const manga = require('./manga/manga.router');
const root = require('./root.router');
const swagger = require('./swagger/swagger.router');
const auth = require('./auth');


router.use('/mangas', manga);
router.use('/auth', auth);
router.use('/api-docs', swagger);
router.use('/', root);

module.exports = router;
