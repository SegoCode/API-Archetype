const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const genericResponses = require('./middlewares/generic.handler');
const logger = require('./middlewares/logger.handler');
const router = require('./routes');

const port = process.env.PORT;

const app = express();

if (typeof process.env.NODE_ENV !== 'undefined' && (process.env.NODE_ENV.trim() === 'production' || process.env.NODE_ENV.trim() === 'test')) {
	//Hide console logs in production
	console.log = function () {};
} else {
	
	app.use(logger.fileLogger()); //File logger middleware alternative to nginx logs
	app.use(logger.consoleLogger());
}

app.use(compression());
app.use(bodyParser.json());
app.disable('x-powered-by');

app.use('/api', router); //Apiv1 entry point
app.use(genericResponses.internalError());
app.use(genericResponses.notFound());

const server = app.listen(port, () => {
	//NOTE: Launch server entry point
	console.log(`🚀 Launch ${process.pid} at http://127.0.0.1:${port}`);
});

module.exports = { app, server };
