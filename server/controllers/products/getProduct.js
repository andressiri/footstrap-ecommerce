// @description Get product by id
// @route GET /api/v1/products/product/:id
// @access Public
const asyncHandler = require('express-async-handler');
const { Product, sequelize } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const productData = await Product.findByPk(id, {
    include: {
      model: sequelize.model('Brand'),
      as: 'brand',
      attributes: ['name', 'logo_url', 'country']
    }
  });

  if (!productData) {
    res.status(404);
    throw new Error('That product doesn\'t exist');
  }

  res.status(200).json(productData);
});
