const router = require('express').Router();

router.use('/news/latest', require('./latest'));
router.use('/news/celebrity', require('./celebrity'));
router.use('/news/music', require('./music'));
router.use('/news/tv', require('./tv'));
router.use('/news/movies', require('./movies'));
router.use('/news/style', require('./style'));
router.use('/news/politics', require('./politics'));
router.use('/news/life', require('./life'));

module.exports = router;
