// @api/v1/users
const express = require('express');
const usersRouter = express.Router();
const { checkName, checkEmail, checkPassword } = require('../helpers/validatorChecks');
const validateRequest = require('../middleware/validateRequest');
const {
  register,
  login,
  userData,
  usersData,
  verificationCode,
  forgotPassword,
  emailVerification,
  changePassword,
  changeName,
  deleteUser,
  logout
} = require('../controllers/users');
const authenticateUser = require('../middleware/authenticateUser');
const checkAdmin = require('../middleware/checkAdmin');

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

usersRouter.get('/', authenticateUser, checkAdmin, usersData);

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

usersRouter.delete('/delete/:id',
  authenticateUser,
  checkPassword,
  validateRequest,
  deleteUser
);

usersRouter.delete('/logout', logout);

module.exports = usersRouter;
