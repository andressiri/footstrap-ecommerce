// @description Handle product creation
// @route POST /api/v1/products
// @access Private
const asyncHandler = require('express-async-handler');
const { Product, Brand } = require('../../models');
const { uploadFile } = require('../../helpers/uploadFile');

module.exports = asyncHandler(async (req, res) => {
  const { name, description, price, brandId, gender, type } = req.body;
  const parsedPrice = parseFloat(price);
  const image = (req.files && req.files.image) ? req.files.image : null;

  if (isNaN(parsedPrice)) {
    res.status(400);
    throw new Error('Please enter a number in the price field');
  };

  if (!image) {
    res.status(400);
    throw new Error('Please send an image');
  }

  const uploadedImage = await uploadFile(image);

  const createResult = await Product.create({
    name,
    description,
    image_url: uploadedImage.Location,
    price: parsedPrice,
    brandId,
    gender,
    type
  });

  const brand = await Brand.findByPk(brandId, {
    attributes: ['name', 'logo_url', 'country']
  });

  const productData = {
    ...createResult.dataValues,
    brand
  };

  res.status(201).json({ message: 'Product created', productData });
});
