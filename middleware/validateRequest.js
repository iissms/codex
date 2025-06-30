const { validationResult } = require('express-validator');

module.exports = rules => async (req, res, next) => {
  await Promise.all(rules.map(rule => rule.run(req)));
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation failed',
      details: errors.array().map(e => e.msg)
    });
  }
  next();
};
