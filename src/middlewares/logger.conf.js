const morgan = require('morgan');// https://expressjs.com/en/resources/middleware/morgan.html
const fs = require('fs');
const path = require('path');

const logFormat = '[:date[iso]] :remote-addr - :method :url :status - :response-time ms';
const file = {
  logDir: 'logs',
  logFileName: 'api.log',
  greaterThan: () => {
    return typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.trim() === 'production' ? 499 : 0;
  },
};

fs.existsSync(file.logDir) || fs.mkdirSync(file.logDir);
//flags: 'a' for append
//For log rotation check rotating-file-stream
let accessLogStream = fs.createWriteStream(path.join(file.logDir, file.logFileName), { flags: 'a' });

//File logger config
const fileLogger = morgan(logFormat, { stream: accessLogStream, skip: (req, res) => res.statusCode < file.greaterThan });

//Console logger config
const consoleLogger = morgan(logFormat);

module.exports = { fileLogger, consoleLogger };
