var routes = require("express").Router();
const {
  create,
  getAll,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const {
  createUserSchema,
  userSchema,
  getAlluserSchema,
  UpdateuserSchema,
} = require("../validations/users");

routes.post("/createUser", createUserSchema, create);
routes.get("/getUsers", getAlluserSchema, getAll);
routes.get("/get-by-username", userSchema, getUser);
routes.delete("/delete-User", userSchema, deleteUser);
routes.patch("/updateUser", UpdateuserSchema, updateUser);

module.exports = routes;
