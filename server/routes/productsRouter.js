// @api/v1/products
const express = require('express');
const productsRouter = express.Router();
const {
  checkName,
  checkDescription,
  checkPrice,
  checkBrand
} = require('../helpers/validatorChecks');
const authenticateUser = require('../middleware/authenticateUser');
const validateRequest = require('../middleware/validateRequest');
const { createProduct } = require('../controllers/products');

productsRouter.post('/',
  authenticateUser,
  checkName,
  checkDescription,
  checkPrice,
  checkBrand,
  validateRequest,
  createProduct
);

module.exports = productsRouter;