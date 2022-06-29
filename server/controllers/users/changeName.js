// @description  Handle change name
// @route  PUT /api/v1/users/name/:name
// @access  Private
const asyncHandler = require('express-async-handler');
const { User } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const { name } = req.params;

  await User.update(
    { name },
    { where: { id: req.user.id } }
  );
  res.status(200).json({ message: `Name changed to ${name}` });
});
