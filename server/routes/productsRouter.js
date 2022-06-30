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
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct
} = require('../controllers/products');

productsRouter.post('/',
  authenticateUser,
  checkName,
  checkDescription,
  checkPrice,
  checkBrand,
  validateRequest,
  createProduct
);

productsRouter.get('/', getProducts);

productsRouter.get('/:id', getProduct);

productsRouter.put('/:id',
  authenticateUser,
  checkName,
  checkDescription,
  checkPrice,
  checkBrand,
  validateRequest,
  updateProduct
);

module.exports = productsRouter;
