var routes= require("express").Router();
const {create,getAll} = require("../controllers/userController")
const {createUserSchema}= require("../validations/users")
routes.get("/getUsers",getAll)
routes.post("/createUser", createUserSchema, create)

module.exports=routes;
