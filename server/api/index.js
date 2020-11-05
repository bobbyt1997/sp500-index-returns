const router = require('express').Router();
const data = require('../../data')

router.get('/', (req, res, next) => {
  res.send(data);
});

//handle 404 error
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;