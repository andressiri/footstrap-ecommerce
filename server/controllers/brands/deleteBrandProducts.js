// @description Handle delete brand products
// @route DELETE /api/v1/brands/:id/products
// @access Private - Admin only
const asyncHandler = require('express-async-handler');
const { Product, Brand } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const brandFound = await Brand.findByPk(id);

  if (!brandFound) {
    res.status(404);
    throw new Error('That brand doesn\'t exist');
  }

  const deleteResult = await Product.destroy({
    where: { brandId: id }
  });

  let message = `Deleted all products for brand ${brandFound.name}`;
  if (deleteResult === 0) message = 'There were no products to delete';

  res.status(200).json({ message, id });
});
