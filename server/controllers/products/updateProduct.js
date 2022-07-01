// @description Handle product update
// @route PUT /api/v1/products/:id
// @access Private - Admin only
const asyncHandler = require('express-async-handler');
const { Product, Brand } = require('../../models');
const { uploadFile } = require('../../helpers/uploadFile');

module.exports = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name, description, price, brandId, gender, type } = req.body;
  const parsedPrice = parseFloat(price);
  const image = (req.files && req.files.image) ? req.files.image : null;

  if (isNaN(parsedPrice)) {
    res.status(400);
    throw new Error('Please enter a number in the price field');
  };

  const product = await Product.findByPk(id);

  if (!product) {
    res.status(404);
    throw new Error('That product does not exist');
  };

  let uploadedImage;
  if (image) {
    uploadedImage = await uploadFile(image);
  }

  const updateResult = await Product.update({
    name,
    description,
    image_url: image ? uploadedImage.Location : product.image_url,
    price: parsedPrice,
    brandId,
    gender,
    type
  }, {
    where: { id },
    returning: true,
    raw: true
  });

  const brand = await Brand.findByPk(brandId, {
    attributes: ['name', 'logo_url', 'country']
  });

  const productData = {
    ...updateResult[1][0],
    brand
  };

  res.status(200).json({ message: 'Product updated', productData });
});
