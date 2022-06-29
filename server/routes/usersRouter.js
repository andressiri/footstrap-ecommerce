// @api/v1/users
const express = require('express');
const usersRouter = express.Router();
const { check } = require('express-validator');
const validateRequest = require('../middleware/validateRequest');
const { register, login, userData } = require('../controllers/users');
const authenticateUser = require('../middleware/authenticateUser');

usersRouter.post('/register',
  check('name')
    .not().isEmpty().withMessage('Please send a name'),
  check('email')
    .not().isEmpty().withMessage('Please send an email')
    .isEmail().withMessage('Please send a valid email'),
  check('password')
    .not().isEmpty().withMessage('Please send a password')
    .isLength({ min: 6 }).withMessage('Password must have at least six characters'),
  validateRequest,
  register
);

usersRouter.post('/login',
  check('email')
    .not().isEmpty().withMessage('Please send an email')
    .isEmail().withMessage('Please send a valid email'),
  check('password')
    .not().isEmpty().withMessage('Please send a password')
    .isLength({ min: 6 }).withMessage('Password must have at least six characters'),
  validateRequest,
  login
);

usersRouter.get('/me', authenticateUser, userData);

module.exports = usersRouter;
