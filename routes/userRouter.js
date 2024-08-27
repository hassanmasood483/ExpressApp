var routes= require("express").Router();
const {create,getAll,getUser,deleteUser} = require("../controllers/userController");
const {createUserSchema,userSchema}=require("../validations/users")

routes.post("/createUser",createUserSchema,create)
routes.get("/getUsers",getAll)
routes.get("/get-by-username",userSchema,getUser)
routes.delete("/deleteUser",userSchema,deleteUser)

module.exports=routes;
