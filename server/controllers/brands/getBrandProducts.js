// @description Get brand products
// @route GET /api/v1/brands/:id/products
// @access Public
const asyncHandler = require('express-async-handler');
const { Brand, sequelize } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const products = await Brand.findByPk(id, {
    include: {
      model: sequelize.model('Product'),
      as: 'products'
    }
  }, { raw: true });

  if (!products[0]) {
    res.status(404);
    throw new Error('There are no products for this brand');
  }

  res.status(200).json(products);
});
