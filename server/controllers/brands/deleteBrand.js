// @description Handle delete brand
// @route DELETE /api/v1/brands/:id
// @access Private - Admin only
const asyncHandler = require('express-async-handler');
const { Product, Brand } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const productFound = await Product.findOne({
    raw: true,
    where: { brandId: id }
  });

  if (productFound) {
    res.status(409);
    throw new Error('Please delete all brand products first');
  };

  const brandFound = await Brand.findOne({
    raw: true,
    where: { id }
  });

  if (!brandFound) {
    res.status(404);
    throw new Error('That brand doesn\'t exist');
  };

  await Brand.destroy({
    where: { id }
  });

  res.status(200).json({ message: 'Deleted brand', id });
});
