// @description Get brand by id
// @route GET /api/v1/brand/:id
// @access Public
const asyncHandler = require('express-async-handler');
const { Brand } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const brandData = await Brand.findByPk(id);

  if (!brandData) {
    res.status(404);
    throw new Error('That brand doesn\'t exist');
  }

  res.status(200).json(brandData);
});
