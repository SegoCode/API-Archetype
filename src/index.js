const os = require('os');
const express = require('express');
const bodyParser = require('body-parser');
const cluster = require('cluster');
const compression = require('compression');

const genericResponses = require('./middlewares/generic.handler');
const logger = require('./middlewares/logger.conf');
const router = require('./routes');

const port = process.env.PORT || 8080;
const app = express();

if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.trim() === 'production') {
  console.log = function () {};
} else {
  app.use(logger.consoleLogger);
}
app.use(logger.fileLogger);

app.use(compression());
app.use(bodyParser.json());
app.disable('x-powered-by');

app.use('/api', router); //Apiv1 entry point
app.use(genericResponses.internalError());
app.use(genericResponses.notFound());

//Running server entry point
let numCPUs = os.cpus().length;
if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  app.listen(port, () => {
    console.log(`Launch ${process.pid} at http://localhost:${port}`);
  });
}
