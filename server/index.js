const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//logging middleware
app.use(morgan('dev'));

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

//parsing middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api routes
app.use('/api', require('./api'));

//send index.html for any routes that do not match
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//hande 500 errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
