const Joi = require("joi");

module.exports = {
  createAuthSchema: async (req, res, next) => {
    const auth = Joi.object({
        username: Joi.string()
        .min(3)
        .max(30)
        .required(),
        password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()})
    try {
      await auth.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error
      });
    }
  },
};