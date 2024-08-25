const Joi = require("joi");

module.exports = {
loginUserSchema: async (req, res, next) => {
    const loginUser= Joi.object({
        username: Joi.string()
        .min(3)
        .max(30)
        .required(),
        password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()})
    try {
      await loginUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error
      });
    }
  },
};