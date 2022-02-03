const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const helmet = require('helmet');

const xssSecure = require('./middlewares/xss.handler');
const genericResponses = require('./middlewares/generic.handler');
const logger = require('./middlewares/logger.handler');
const router = require('./routes');

const app = express();

const port = process.env.PORT;
let httpsState = false;

if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.trim() === 'production') {
	//Hide console logs in production
	console.log = function () {};
	//Set https state for createServer function
	httpsState = true;
} else {
	app.use(logger.consoleLogger());
}

//Middleware for secure headers
//More info see: https://helmetjs.github.io/
app.use(helmet());

//Prevent XSS injection
app.use(xssSecure.xssfilter());

//Use Json for incoming data
app.use(bodyParser.json());

//Disable powered-by header
app.disable('x-powered-by');

//API v1, entry point
app.use('/v1.0', router);

//To prevent injections in sendFile() function use file name like endpoint
app.get('/.well-known/security.txt', function (req, res) {
	//Security file for blackHats, see more: https://securitytxt.org/
	//https://www.google.com/.well-known/security.txt
	res.sendFile('/.well-known/security.txt', { root: __dirname });
});

app.get('/humans.txt', function (req, res) {
	//Thank to all the participants of this project, see more: https://humanstxt.org/ES
	//https://www.google.com/humans.txt
	res.sendFile('/.well-known/humans.txt', { root: __dirname });
});

app.get('/robots.txt', function (req, res) {
	//Google use them to index the web content, see more: https://www.robotstxt.org/
	//https://www.google.com/robots.txt
	res.sendFile('/.well-known/robots.txt', { root: __dirname });
});

//Error 500 catch
app.use(genericResponses.internalError());

//Error 404 catch
app.use(genericResponses.notFound());

let server;
if (httpsState) {
	//TODO: Specify HTTPS certificate in env
	server = https.createServer({ cert: fs.readFileSync('cert'), key: fs.readFileSync('key') }, app).listen(port, function () {
		console.log(`🚀 Launch ${process.pid} at port: ${port}`);
	});
} else {
	server = app.listen(port, () => {
		console.log(`🚀 Launch ${process.pid} at http://127.0.0.1:${port}`);
	});
}
module.exports = { app, server };
