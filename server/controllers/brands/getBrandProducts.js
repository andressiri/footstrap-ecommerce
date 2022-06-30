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

  res.status(200).json(products);
});
