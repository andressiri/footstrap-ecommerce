// @api/v1/users
const express = require('express');
const usersRouter = express.Router();
const { checkName, checkEmail, checkPassword } = require('../helpers/validatorChecks');
const validateRequest = require('../middleware/validateRequest');
const {
  register,
  login,
  userData,
  verificationCode,
  forgotPassword,
  emailVerification,
  changePassword,
  changeName
} = require('../controllers/users');
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

usersRouter.post('/verification', authenticateUser, verificationCode);

usersRouter.post('/forgot-password',
  checkEmail,
  validateRequest,
  forgotPassword
);

usersRouter.put('/verification/:code', emailVerification);

usersRouter.put('/password',
  authenticateUser,
  checkPassword,
  validateRequest,
  changePassword
);

usersRouter.put('/name/:name', authenticateUser, changeName);

module.exports = usersRouter;
