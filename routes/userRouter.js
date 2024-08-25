var routes= require("express").Router();
const {create,getAll, getByusername, deleteUser} = require("../controllers/userController")
const {createUserSchema,userSchema}=require("../validations/users")

routes.post("/createUser",createUserSchema,create)
routes.get("/getUsers",getAll)
// routes.get("/get-by-username",userSchema,getByusername)
// routes.delete("/deleteUser",deleteUser)

module.exports=routes;
