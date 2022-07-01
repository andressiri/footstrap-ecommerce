// @description  Handle login authentication
// @route POST /api/v1/users/login
// @access Public
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const generateToken = require('../../helpers/generateToken');

module.exports = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  const userData = {
    ...user.dataValues,
    token: generateToken(user.id)
  };
  delete userData.password;

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({ message: 'User authenticated', userData });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  };
});
