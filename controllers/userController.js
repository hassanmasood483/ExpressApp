const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../models/UserModel");
const responseHandler = require("../ResponseHandler");
const { getRole } = require("../models/CommonModel");

module.exports = {
  create: async (req, res) => {
    try {
      const role = await getRole(req.body);
      if (role.error) {
        return res.send({ error: role.error });
      }
      delete req.body.role;
      req.body.roleId = role.response.dataValues.roleId;
      const user = await createUser(req.body);
      responseHandler(user, res);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getAll: async (req, res) => {
    try {
      req.query.offset = (req.query.pageNo - 1) * req.query.limit;
      const users = await getAllUsers(req.query);
      responseHandler(users, res);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await getUser(req.query);
      responseHandler(user, res);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  deleteUser: async (req, res) => {
    try {
      const users = await deleteUser(req.query);
      responseHandler(users, res);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await deleteUser(req.body);
      responseHandler(user, res);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
