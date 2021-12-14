const messages = require('../Utils/message.utils');

function internalError() {
	return (err, req, res, next) => {
		res.status(messages.INTERNAL_ERROR).json(messages.RESPOND_INTERNAL_ERROR(err));
	};
}

function notFound() {
	return (req, res, next) => {
		res.status(messages.NOT_FOUND).json(messages.RESPOND_NOT_FOUND());
	};
}

module.exports = { internalError, notFound };
