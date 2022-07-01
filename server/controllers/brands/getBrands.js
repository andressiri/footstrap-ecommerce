// @description Get brands
// @route GET /api/v1/brands
// @access Public
const asyncHandler = require('express-async-handler');
const { Brand } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const brands = await Brand.findAll({ raw: true });

  if (!brands[0]) {
    res.status(404);
    throw new Error('There are no brands');
  }

  res.status(200).json(brands);
});
