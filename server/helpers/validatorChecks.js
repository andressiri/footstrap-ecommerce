const { check } = require('express-validator');

module.exports.checkName = check('name')
  .not().isEmpty().withMessage('Please send a name');

// Users
module.exports.checkEmail = check('email')
  .not().isEmpty().withMessage('Please send an email')
  .isEmail().withMessage('Please send a valid email');

module.exports.checkPassword = check('password')
  .not().isEmpty().withMessage('Please send a password')
  .isLength({ min: 6 }).withMessage('Password must have at least six characters');

// Products
module.exports.checkDescription = check('description')
  .not().isEmpty().withMessage('Please send a description');

module.exports.checkPrice = check('price')
  .not().isEmpty().withMessage('Please send a price')
  .isNumeric().withMessage('Price should be a number');

module.exports.checkBrand = check('brandId')
  .not().isEmpty().withMessage('Please send a brand id')
  .isNumeric().withMessage('Brand id should be a number');
