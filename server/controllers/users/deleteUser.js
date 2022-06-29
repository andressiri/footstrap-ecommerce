// @description  Handle account delete
// @route  DELETE /api/v1/users/delete/:id
// @access  Private
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const id = req.params.id;

  try {
    if (id !== req.user.id) {
      res.status(403);
      throw new Error('You can\'t delete that resource');
    };

    const user = await User.findOne({
      raw: true,
      attributes: ['password'],
      where: { id }
    });

    if (!await bcrypt.compare(password, user.password)) {
      res.status(401);
      throw new Error('Password incorrect');
    };
  } catch (error) {
    const statusCode = res.statusCode || 401;
    res.status(statusCode);
    throw new Error(error);
  };

  await User.destroy({
    where: { id }
  });

  res.status(200).json({ message: `Deleted ${req.user.name}'s account` });
});
