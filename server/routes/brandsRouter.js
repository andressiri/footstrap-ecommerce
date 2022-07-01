// @api/v1/brands
const express = require('express');
const brandsRouter = express.Router();
const { checkName } = require('../helpers/validatorChecks');
const authenticateUser = require('../middleware/authenticateUser');
const validateRequest = require('../middleware/validateRequest');
const {
  createBrand,
  getBrandProducts,
  getBrands,
  getBrand,
  updateBrand
} = require('../controllers/brands');

brandsRouter.post('/',
  authenticateUser,
  checkName,
  validateRequest,
  createBrand
);

brandsRouter.get('/', getBrands);

brandsRouter.get('/:id', getBrand);

brandsRouter.get('/:id/products', getBrandProducts);

brandsRouter.put('/:id',
  authenticateUser,
  checkName,
  validateRequest,
  updateBrand
);

module.exports = brandsRouter;
