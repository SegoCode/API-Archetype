const router = require('express').Router();
const mangas = require('./mangas.router');
const root = require('./root.router');
const auth = require('./auth');

router.use('/mangas', mangas);
router.use('/auth', auth);
router.use('/', root);

module.exports = router;
