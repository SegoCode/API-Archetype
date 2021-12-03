const messages = require('../models/message.model');

const ROLE = {
  ADMIN: 'admin',
  LOGGED: 'logged',
  PUBLIC: 'public',
};

function authRole(role) {
  return (req, res, next) => {
    if (role === ROLE.LOGGED || role === ROLE.ADMIN) {
      res.status(messages.UNAUTHORIZED_CODE).json(messages.RESPOND_UNAUTHORIZED());
    } else {
      next();
    }
  };
}

module.exports = { authRole, ROLE };
