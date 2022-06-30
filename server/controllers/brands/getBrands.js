// @description Get brands
// @route GET /api/v1/brands
// @access Public
const asyncHandler = require('express-async-handler');
const { Brand } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const brands = await Brand.findAll({ raw: true });

  res.status(200).json(brands);
});
