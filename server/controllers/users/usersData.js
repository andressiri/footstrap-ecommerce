// @description Get users data
// @route GET /api/v1/users
// @access Private - Admin only
const asyncHandler = require('express-async-handler');
const { User } = require('../../models');

module.exports = asyncHandler(async (req, res) => {
  const usersData = await User.findAll({
    raw: true,
    attributes: { exclude: ['password'] }
  });

  res.json({ message: 'Users data obtained', usersData });
});
