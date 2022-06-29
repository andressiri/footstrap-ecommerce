// @api/v1/users
const express = require('express');
const usersRouter = express.Router();
const { check } = require('express-validator');
const validateRequest = require('../middleware/validateRequest');
const { register } = require('../controllers/users');

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

module.exports = usersRouter;
