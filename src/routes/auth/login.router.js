const router = require('express').Router();
const jwt = require('jsonwebtoken');
const loginService = require('../../services/login.service');
const messages = require('../../Utils/message.utils');
const reqAuth = require('../../middlewares/auth.handler');

const authenticateSchema = require('../../models/login.model');

const service = new loginService();

//POST
router.post('/', reqAuth.authRole(reqAuth.ROLE.PUBLIC), function (req, res) {
  const validation = authenticateSchema.validate(req.body);
  if (typeof validation.error === 'undefined') {
    let respose = service.authenticate(req.body); //TODO Asyc service response role and userdata

    configAccess = {
      role: reqAuth.ROLE.ADMIN,
    };

    configExpiration = {
      expiresIn: '2h',
    };

    const token = jwt.sign(configAccess, 'your-256-bit-secret', configExpiration);
    res.json({ token: token });
  } else {
    res.status(messages.BAD_REQUEST).json(messages.RESPOND_BAD_REQUEST(validation.error.message));
  }
});

router.get('/refresh', reqAuth.authRole(reqAuth.ROLE.LOGGED), function (req, res) {
  //TODO Response with older config
  service.refresh(req.body);

  configAccess = {
    role: reqAuth.ROLE.ADMIN,
  };

  configExpiration = {
    expiresIn: '2h',
  };

  const token = jwt.sign(configAccess, 'your-256-bit-secret', configExpiration);
  res.json({ token: token });
});

module.exports = router;
