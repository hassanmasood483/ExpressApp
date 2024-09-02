const Joi = require("joi");

module.exports = {
  createUserSchema: async (req, res, next) => {
    const createUser = Joi.object({
      role: Joi.valid("Instructor", "Admin", "Trainee").required(),
      username: Joi.string().min(3).max(30).required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      fname: Joi.string().min(3).required(),
      lname: Joi.string().min(3).required(),
      mobile: Joi.string().required(),
      email: Joi.string().email().required(),
    });

    try {
      const validate = await createUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error,
      });
    }
  },

  userSchema: async (req, res, next) => {
    const username = Joi.object({
      username: Joi.string().min(3).max(30),
      userId: Joi.string(),
    });
    try {
      await username.validateAsync(req.query);
      next();
    } catch (error) {
      return res.send({
        error,
      });
    }
  },

  getAlluserSchema: async (req, res, next) => {
    const getAlluser = Joi.object({
      pageNo: Joi.number().required(),
      limit: Joi.number().valid(3, 6).required(),
      //FILTERS
      role: Joi.valid("Instructor", "Admin", "Trainee"),
      username: Joi.string(),
      fname: Joi.string(),
      lname: Joi.string(),
      mobile: Joi.string(),
      email: Joi.string(),

      orderWith: Joi.string().valid(
        "fname",
        "lname",
        "email",
        "username",
        "mobile"
      ),

      orderBy: Joi.string().valid("ASC", "DESC"),
    });
    try {
      await getAlluser.validateAsync(req.query);
      next();
    } catch (error) {
      return res.send({
        error,
      });
    }
  },

  UpdateuserSchema: async (req, res, next) => {
    const updateUser = Joi.object({
      // userId: Joi.string(),
      role: Joi.valid("Instructor", "Admin", "Trainee"),
      username: Joi.string().required(),
      fname: Joi.string(),
      lname: Joi.string(),
      mobile: Joi.string(),
      email: Joi.string(),
    });
    try {
      await updateUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error,
      });
    }
  },
};
