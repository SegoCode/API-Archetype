let messages = {};

messages.OK_CODE = 200;
messages.BAD_REQUEST = 400;
messages.UNAUTHORIZED_CODE = 401;
messages.FORBIDDEN = 403;
messages.NOT_FOUND = 404;
messages.NOT_ALLOWED = 405;
messages.INTERNAL_ERROR = 500;

messages.RESPOND_OK_CUSTOM = function (msg) {
  return {
    status: this.RESPOND_OK_CODE,
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

messages.RESPOND_INTERNAL_ERROR = function (error) {
  return {
    status: error.status || 500,
    error: 'Internal server error: ' + error.message,
    message: 'Log generated: '+ Buffer.from(new Date().toISOString()).toString('base64'), 
  };
};


module.exports = messages;
