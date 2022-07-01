// @api/v1/brands
const express = require('express');
const brandsRouter = express.Router();
const { checkName } = require('../helpers/validatorChecks');
const authenticateUser = require('../middleware/authenticateUser');
const checkAdmin = require('../middleware/checkAdmin');
const validateRequest = require('../middleware/validateRequest');
const {
  createBrand,
  getBrandProducts,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
  deleteBrandProducts
} = require('../controllers/brands');

brandsRouter.post('/',
  authenticateUser,
  checkAdmin,
  checkName,
  validateRequest,
  createBrand
);

brandsRouter.get('/', getBrands);

brandsRouter.get('/:id', getBrand);

brandsRouter.get('/:id/products', getBrandProducts);

brandsRouter.put('/:id',
  authenticateUser,
  checkAdmin,
  checkName,
  validateRequest,
  updateBrand
);

brandsRouter.delete('/:id', authenticateUser, checkAdmin, deleteBrand);

brandsRouter.delete('/:id/products', authenticateUser, checkAdmin, deleteBrandProducts);

module.exports = brandsRouter;
