const { check } = require('express-validator');

module.exports.checkName = check('name')
  .not().isEmpty().withMessage('Please send a name');

module.exports.checkEmail = check('email')
  .not().isEmpty().withMessage('Please send an email')
  .isEmail().withMessage('Please send a valid email');

module.exports.checkPassword = check('password')
  .not().isEmpty().withMessage('Please send a password')
  .isLength({ min: 6 }).withMessage('Password must have at least six characters');
