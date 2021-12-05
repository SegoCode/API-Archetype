const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const genericResponses = require('./middlewares/generic.handler');
const logger = require('./middlewares/logger.conf');
const router = require('./routes');

const port = process.env.PORT || 8020;

const app = express();

if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.trim() === 'production') {
  //Hide console logs in production
  console.log(`✔️ Launch detected on production mode`);
  console.log = function () {};
} else {
  // app.use(logger.fileLogger); Optional file logger middleware
  app.use(logger.consoleLogger);
}

app.use(compression());
app.use(bodyParser.json());
app.disable('x-powered-by');

app.use('/api', router); //Apiv1 entry point
app.use(genericResponses.internalError());
app.use(genericResponses.notFound());

app.listen(port, () => {
  //Launch server entry point
  console.log(`🚀 Launch ${process.pid} at http://localhost:${port}`);
});
