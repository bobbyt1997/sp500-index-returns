const router = require('express').Router();
const data = require('../../data')

router.get('/', (req, res, next) => {
  const filter = req.query.sliderValue;

  if (!filter) {
    res.send(data);
  } else {
    res.send(data.filter((obj) => {
      return obj.year >= filter[0] && obj.year <= filter[1];
    }))
  }
});

//handle 404 error
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;