const checkAdmin = (req, res, next) => {
  if (req.user.roleId !== 2) {
    res.status(401);
    throw new Error('Access denied, admin credentials required');
  }

  next();
};

module.exports = checkAdmin;
