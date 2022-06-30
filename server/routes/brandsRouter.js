// @api/v1/brands
const express = require('express');
const brandsRouter = express.Router();
const { checkName } = require('../helpers/validatorChecks');
const authenticateUser = require('../middleware/authenticateUser');
const validateRequest = require('../middleware/validateRequest');
const { createBrand } = require('../controllers/brands');

brandsRouter.post('/',
  authenticateUser,
  checkName,
  validateRequest,
  createBrand
);

module.exports = brandsRouter;
