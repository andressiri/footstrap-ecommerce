// @description Handle user registration
// @route POST /api/v1/users/register
// @access Public
const asyncHandler = require('express-async-handler');
const { User } = require('../../models');
const hashPassword = require('../../helpers/hashPassword');
const generateToken = require('../../helpers/generateToken');

module.exports = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const alreadyRegistered = await User.findOne({ where: { email } });
  if (alreadyRegistered) {
    res.status(409);
    throw new Error('That email is already registered');
  };

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    verified: null,
    roleId: 1
  });

  const userData = {
    ...user.dataValues,
    token: generateToken(user.id)
  };
  delete userData.password;

  res.status(201).json({ message: 'User registered', userData });
});
