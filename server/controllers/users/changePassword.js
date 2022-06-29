// @description  Handle change password
// @route  PUT /api/v1/users/password
// @access  Private
const asyncHandler = require('express-async-handler');
const hashPassword = require('../../helpers/hashPassword');
const { User } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const password = req.body.password;

  const hashedPassword = await hashPassword(password);

  await User.update(
    { password: hashedPassword },
    { where: { id: req.user.id } }
  );

  res.status(200).json({ message: 'Password updated' });
});
