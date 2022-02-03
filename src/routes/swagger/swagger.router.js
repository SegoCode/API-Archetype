const router = require('express').Router();
const path = require('path');
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('../../docs-swagger/swagger.json');
const style = require('../../docs-swagger/style');

//Swagger HTML options for customize docs
var swaggerOptions = {
	customCss: style,
	customfavIcon: '../api-docs/assets/favicon.ico',
	customSiteTitle: 'Docs · API Archetype',
    customJs: ''
};

router.use('/', swaggerUi.serve);

router.get('/', swaggerUi.setup(swaggerDocument, swaggerOptions));

//The relative path is blocked by Node.js, this is a bypass
//To prevent injections in sendFile() function use file name like endpoint
//This is an example for adding future assets to CSS if you dont care about favicon, delete this endpoint
router.get('/assets/favicon.ico', function (req, res) {
	res.sendFile(path.resolve(path.join(__dirname, '../../docs-swagger/assets/favicon.ico')));
});



module.exports = router;
