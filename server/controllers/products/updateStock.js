// @description Handle update product stock
// @route PUT /api/v1/products/:id
// @access Private - Admin only
const asyncHandler = require('express-async-handler');
const { Size, Product, Brand } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { s35, s36, s37, s38, s39, s40, s41, s42, s43, s44, s45, s46, s48, s50, s52 } = req.body;

  const productFound = await Product.findByPk(id);

  if (!productFound) {
    res.status(404);
    throw new Error('That product doesn\'t exist');
  }

  const updateResult = await Size.update({
    s35, s36, s37, s38, s39, s40, s41, s42, s43, s44, s45, s46, s48, s50, s52
  }, {
    where: { productId: id },
    returning: true,
    raw: true
  });

  if (!updateResult[1]) {
    res.status(400);
    throw new Error('At least one value is required to update');
  }

  const brand = await Brand.findByPk(productFound.brandId, {
    attributes: ['name', 'logo_url', 'country']
  });

  const productData = {
    ...productFound.dataValues,
    brand,
    stock: updateResult[1][0]
  };

  res.status(200).json({ message: 'Product stock updated', productData });
});
