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
const checkAdmin = require('../middleware/checkAdmin');
const validateRequest = require('../middleware/validateRequest');
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  productsStock,
  productStock,
  updateStock
} = require('../controllers/products');

productsRouter.post('/',
  authenticateUser,
  checkAdmin,
  checkName,
  checkDescription,
  checkPrice,
  checkBrand,
  validateRequest,
  createProduct
);

productsRouter.get('/', getProducts);

productsRouter.get('/product/:id', getProduct);

productsRouter.put('/product/:id',
  authenticateUser,
  checkAdmin,
  checkName,
  checkDescription,
  checkPrice,
  checkBrand,
  validateRequest,
  updateProduct
);

productsRouter.delete('/product/:id', authenticateUser, checkAdmin, deleteProduct);

productsRouter.get('/stock', productsStock);

productsRouter.get('/stock/:id', productStock);

productsRouter.put('/stock/:id', authenticateUser, checkAdmin, updateStock);

module.exports = productsRouter;
