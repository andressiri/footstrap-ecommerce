// @description Handle product creation
// @route POST /api/v1/brands
// @access Private - Admin only
const asyncHandler = require('express-async-handler');
const { Brand } = require('../../models');
const { uploadFile } = require('../../helpers/uploadFile');

module.exports = asyncHandler(async (req, res) => {
  const { name, country } = req.body;
  const logo = (req.files && req.files.logo) ? req.files.logo : null;

  if (!logo) {
    res.status(400);
    throw new Error('Please send a logo');
  }

  const uploadedImage = await uploadFile(logo);

  const createResult = await Brand.create({
    name,
    logo_url: uploadedImage.Location,
    country
  });

  res.status(201).json({ message: 'Brand created', brandData: createResult.dataValues });
});
