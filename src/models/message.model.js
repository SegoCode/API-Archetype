let Messages = {};

Messages.OK_CODE = 200;
Messages.BAD_REQUEST = 400;
Messages.UNAUTHORIZED_CODE = 401;
Messages.FORBIDDEN = 403;
Messages.NOT_FOUND = 404;
Messages.NOT_ALLOWED = 405;
Messages.INTERNAL_ERROR = 500;

Messages.RESPOND_OK_CUSTOM = function (msg) {
  return {
    status: this.RESPOND_OK_CODE,
    message: msg,
  };
};

Messages.RESPOND_BAD_REQUEST = function (error) {
  return {
    status: this.BAD_REQUEST,
    error: 'Bad Request',
    message: error,
  };
};

Messages.RESPOND_UNAUTHORIZED = function () {
  return {
    status: this.UNAUTHORIZED_CODE,
    error: 'Unauth­orized',
    message: 'This endpoint need privileges',
  };
};

Messages.RESPOND_FORBIDDEN = function () {
  return {
    status: this.FORBIDDEN,
    error: 'Forbidden',
    message: 'This Endpoint cannot be accessed',
  };
};

Messages.RESPOND_NOT_FOUND = function () {
  return {
    status: this.NOT_FOUND,
    error: 'Not Found',
    message: "This endpoint doesn't exist",
  };
};

Messages.RESPOND_NOT_ALLOWED = function () {
  return {
    status: this.NOT_ALLOWED,
    error: 'Method Not Allowed',
    message: 'Use /api/',
  };
};

Messages.RESPOND_INTERNAL_ERROR = function (error) {
  return {
    status: error.status,
    error: 'Server internal error: ' + error.message,
    message: 'Log generated', //TODO https://www.npmjs.com/package/winston
  };
};

module.exports = Messages;
