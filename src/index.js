const express = require('express');
const bodyParser = require('body-parser');
const messages = require('./models/message.model');
const logger = require('./middlewares/logger.handler');
const reqAuth = require('./middlewares/auth.handler');
const genericResponses = require('./middlewares/generic.handler');
const router = require('./routes');

const port = process.env.PORT || 8080;
const app = express();

if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.trim() === 'production') {
  console.log = function () {};
} else {
  app.use(logger());
}

app.use(bodyParser.json());
app.use('/api', router);
app.use(genericResponses.internalError());
app.use(genericResponses.notFound());


//Running server entry point
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
