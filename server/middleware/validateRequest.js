const { validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
  const result = validationResult(req);

  if (typeof result.errors[0] === 'object') {
    res.status(400);
    throw new Error(result.errors[0].msg);
  }

  next();
};

module.exports = validateFields;
