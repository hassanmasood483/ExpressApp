const { models } = require("./index");
const { Op } = require("sequelize");

module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  },
  getAllUsers: async (query) => {
    try {
      const users = await models.users.findAll({
        where: {
          ...(query.fname ? { fname: { [Op.substring]: query.fname } } : true),
          ...(query.lname ? { lname: { [Op.substring]: query.lname } } : true),
          ...(query.username
            ? { username: { [Op.substring]: query.username } }
            : true),
          ...(query.email ? { email: { [Op.substring]: query.email } } : true),
          ...(query.mobile
            ? { mobile: { [Op.substring]: query.mobile } }
            : true),
        },
        attributes: { exclude: ["password", "roleId"] },
        include: [
          {
            model: models.roles,
            attributes: ["role", "roleId"],
            where: {
              ...(query.role ? { role: query.role } : true),
            },
          },
        ],
        order: [
          [
            query.orderWith ? query.orderWith : "fname",
            query.orderBy ? query.orderBy : "ASC",
          ],
        ],
        offset: query.offset,
        limit: query.limit,
      });
      return { response: users };
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  },

  getUser: async ({ userId, username }) => {
    try {
      const user = await models.users.findOne({
        where: {
          ...(userId ? { userId: userId } : { username: username }),
        },
        attributes: { exclude: ["password", "roleId"] },
        include: [
          {
            model: models.roles,
            attributes: ["roleId", "role"],
          },
        ],
      });
      return {
        response: user,
      };
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  },

  deleteUser: async ({ userId, username }) => {
    try {
      const user = await models.users.destroy({
        where: {
          ...(userId ? { userId: userId } : { username: username }),
        },
      });
      return {
        response: user,
      }; //will return 1 or 0
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  },

  updateUser: async ({ username, ...body }) => {
    try {
      const user = await models.users.update(
        {
          ...body,
        },
        {
          where: {
            username: username,
          },
        }
      );
      return {
        response: user,
      };
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  },
};
