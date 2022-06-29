const jwt = require('jsonwebtoken');

module.exports = (id, temporary) => {
  let expiration = '30d';
  if (temporary) expiration = 300;

  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: expiration
  });
};
