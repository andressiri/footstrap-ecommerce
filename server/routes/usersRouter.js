// @api/v1/users
const express = require('express');
const usersRouter = express.Router();
const { checkName, checkEmail, checkPassword } = require('../helpers/validatorChecks');
const validateRequest = require('../middleware/validateRequest');
const { register, login, userData, forgotPassword } = require('../controllers/users');
const authenticateUser = require('../middleware/authenticateUser');

usersRouter.post('/register',
  checkName,
  checkEmail,
  checkPassword,
  validateRequest,
  register
);

usersRouter.post('/login',
  checkEmail,
  checkPassword,
  validateRequest,
  login
);

usersRouter.get('/me', authenticateUser, userData);

usersRouter.post('/forgot-password',
  checkEmail,
  validateRequest,
  forgotPassword
);

module.exports = usersRouter;
