const express = require('express');
const router = require('./routes');
const Messages = require('./models/message.model');
var bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

let app = express();

if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.trim() === 'production') {
  console.log = function () {};
}

app.use(bodyParser.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.status(Messages.NOT_ALLOWED).json(Messages.RESPOND_NOT_ALLOWED());
});

app.use(function (req, res, next) {
  res.status(Messages.NOT_FOUND).json(Messages.RESPOND_NOT_FOUND());
});

app.use(function (error, req, res) {
  res.status(Messages.INTERNAL_ERROR).json(Messages.RESPOND_INTERNAL_ERROR(error));
});

//Running server entry point
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
