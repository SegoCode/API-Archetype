const router = require('express').Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../documents/swagger.json');

const messages = require('../utils/message.utils');
const reqAuth = require('../middlewares/auth.handler');

router.get('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
	//TODO: Generate swagger documentation
	res.status(messages.OK_CODE).json(messages.RESPOND_OK_CUSTOM('Consult API documentation: /api-docs'));
});



var options = {
	customCss: '.swagger-ui .topbar { display: none }',
	customSiteTitle: "API REST FULL",
	customfavIcon: "/assets/favicon.ico"
  };

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument,options));



module.exports = router;
