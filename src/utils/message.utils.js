let messages = {};

messages.OK_CODE = 200;
messages.CREATED = 201;
messages.DELETED = 204;
messages.BAD_REQUEST = 400;
messages.UNAUTHORIZED_CODE = 401;
messages.FORBIDDEN = 403;
messages.NOT_FOUND = 404;
messages.NOT_ALLOWED = 405;
messages.CONFLICT = 409;
messages.TOO_LARGE = 413;
messages.INTERNAL_ERROR = 500;

messages.RESPOND_OK_CUSTOM = function (msg) {
  return {
    status: this.OK_CODE,
    message: msg,
  };
};

messages.RESPOND_CREATED_CUSTOM = function (msg) {
  return {
    status: this.CREATED,
    message: msg,
  };
};


messages.RESPOND_BAD_REQUEST = function (error) {
  return {
    status: this.BAD_REQUEST,
    error: 'Bad Request',
    message: error,
  };
};

messages.RESPOND_UNAUTHORIZED = function () {
  return {
    status: this.UNAUTHORIZED_CODE,
    error: 'Unauth­orized',
    message: 'This endpoint need more privileges',
  };
};

messages.RESPOND_FORBIDDEN = function () {
  return {
    status: this.FORBIDDEN,
    error: 'Forbidden',
    message: 'This Endpoint cannot be accessed',
  };
};

messages.RESPOND_NOT_FOUND = function () {
  return {
    status: this.NOT_FOUND,
    error: 'Not Found',
    message: "This endpoint doesn't exist",
  };
};

messages.RESPOND_NOT_ALLOWED = function () {
  return {
    status: this.NOT_ALLOWED,
    error: 'Method Not Allowed',
    message: 'Use /api/',
  };
};

messages.RESPOND_CONFLICT = function (msg) {
  return {
    status: this.CONFLICT,
    message: msg,
  };
};

messages.RESPOND_TOO_LARGE = function () {
  return {
    status: this.TOO_LARGE,
    error: 'Request Entity Too Large',
    message: 'Parameters exceeded the maximum',
  };
};

messages.RESPOND_INTERNAL_ERROR = function (error) {
  return {
    status: error.status || 500,
    error: 'Internal server error: ' + error.message,
    message: 'Log generated ticket: ' + new Date().valueOf(),
  };
};

module.exports = messages;
