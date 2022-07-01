// @description Handle delete product
// @route DELETE /api/v1/products/:id
// @access Private - Admin only
const asyncHandler = require('express-async-handler');
const { Product } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const product = await Product.findOne({
    raw: true,
    where: { id }
  });

  if (!product) {
    res.status(404);
    throw new Error('That product does not exist');
  };

  await Product.destroy({
    where: { id }
  });

  res.status(200).json({ message: 'Deleted product', id });
});
