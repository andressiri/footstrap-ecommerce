// @description Get user data
// @route GET /api/v1/users/me
// @access Private
const asyncHandler = require('express-async-handler');
const { User } = require('../../models');
const generateToken = require('../../helpers/generateToken');

module.exports = asyncHandler(async (req, res) => {
  let userData = await User.findOne({
    raw: true,
    attributes: { exclude: ['password'] },
    where: { id: req.user.id }
  });

  userData = {
    ...userData,
    token: generateToken(userData.id)
  };

  res.json({ userData });
});
