// @api/v1/brands
const express = require('express');
const brandsRouter = express.Router();
const { checkName } = require('../helpers/validatorChecks');
const authenticateUser = require('../middleware/authenticateUser');
const validateRequest = require('../middleware/validateRequest');
const { createBrand, getBrandProducts } = require('../controllers/brands');

brandsRouter.post('/',
  authenticateUser,
  checkName,
  validateRequest,
  createBrand
);

brandsRouter.get('/:id/products', getBrandProducts);

module.exports = brandsRouter;
