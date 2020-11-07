const router = require('express').Router();
const data = require('../../data').sort((a, b) => a.year - b.year);

router.get('/', (req, res, next) => {
  const filter = req.query.sliderValue;
  let cumulativeReturn = 0;
  let returnData = [...data];

  if (filter) {
    returnData = returnData.filter((obj) => obj.year >= filter[0] && obj.year <= filter[1]);
  }

  res.send(returnData.map((obj) => {
    cumulativeReturn += parseFloat(obj.totalReturn);
    let formattedReturn = cumulativeReturn.toFixed(2);
    return { ...obj, cumulative: formattedReturn };
  }).sort((a, b) => b.year - a.year));
});

//handle 404 error
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;