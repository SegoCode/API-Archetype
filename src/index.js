const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const helmet = require('helmet');

const xssSecure = require('./middlewares/xss.handler');
const genericResponses = require('./middlewares/generic.handler');
const logger = require('./middlewares/logger.handler');
const router = require('./routes');

const port = process.env.PORT;
let server;
let httpsState = false;

const app = express();

if (typeof process.env.NODE_ENV !== 'undefined' && (process.env.NODE_ENV.trim() === 'production')) {
	//Hide console logs in production
	console.log = function () {};

	//Set https state for createServer function
	httpsState = true;
} else {
	//TODO: specified logger for production maybe morgan create a log for instance, use a pm2 logs
	app.use(logger.fileLogger()); //File logger middleware alternative to nginx logs
	app.use(logger.consoleLogger());
}

//Middleware for secure headers
//More info see: https://helmetjs.github.io/
app.use(helmet());

app.use(xssSecure.xssfilter());

//Configure environment
app.use(bodyParser.json());
app.disable('x-powered-by');

//API v1, entry point
app.use('/v1.0', router);

//Error 500 catch
app.use(genericResponses.internalError());

//Error 404 catch
app.use(genericResponses.notFound());

if (httpsState) {
	server = https.createServer({ cert: fs.readFileSync('cert'), key: fs.readFileSync('key') }, app).listen(port, function () {
		console.log(`🚀 Launch ${process.pid} at port: ${port}`);
	});
} else {
	server = app.listen(port, () => {
		console.log(`🚀 Launch ${process.pid} at http://127.0.0.1:${port}`);
	});
}
module.exports = { app, server };
