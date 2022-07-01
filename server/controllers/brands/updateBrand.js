// @description Handle brand update
// @route PUT /api/v1/brands/:id
// @access Private - Admin only
const asyncHandler = require('express-async-handler');
const { Brand } = require('../../models');
const { uploadFile } = require('../../helpers/uploadFile');

module.exports = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name, country } = req.body;
  const logo = (req.files && req.files.logo) ? req.files.logo : null;

  const brandFound = await Brand.findByPk(id);

  if (!brandFound) {
    res.status(404);
    throw new Error('That brand does not exist');
  };

  let uploadedImage;
  if (logo) {
    uploadedImage = await uploadFile(logo);
  }

  const updateResult = await Brand.update({
    name,
    logo_url: logo ? uploadedImage.Location : brandFound.image_url,
    country
  }, {
    where: { id },
    returning: true,
    raw: true
  });

  res.status(200).json({ message: 'Brand updated', brandData: updateResult[1][0] });
});
