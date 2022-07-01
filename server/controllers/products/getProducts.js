// @description Get products
// @route GET /api/v1/products
// @access Public
const asyncHandler = require('express-async-handler');
const { Product, sequelize } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const products = await Product.findAll({
    include: {
      model: sequelize.model('Brand'),
      as: 'brand',
      attributes: ['name', 'logo_url', 'country']
    }
  }, { raw: true });

  if (!products[0]) {
    res.status(404);
    throw new Error('There are no products');
  }

  res.status(200).json(products);
});
