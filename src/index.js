const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');
const messages = require('./models/message.model');
const logger = require('./middlewares/logger.handler');

const port = process.env.PORT || 8080;
const app = express();

if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.trim() === 'production') {
  console.log = function () {};
}

app.use(bodyParser.json());

//Middlewares
app.use(logger());
app.use('/api', router);

//Root api endpoint
app.get('/', function (req, res) {
  res.status(messages.NOT_ALLOWED).json(messages.RESPOND_NOT_ALLOWED());
});

//Error
app.use(function (err, req, res, next) {
  res.status(messages.INTERNAL_ERROR).json(messages.RESPOND_INTERNAL_ERROR(error));
});

//Not found api endpoint
app.use(function (req, res, next) {
  res.status(messages.NOT_FOUND).json(messages.RESPOND_NOT_FOUND());
});

//Running server entry point
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
