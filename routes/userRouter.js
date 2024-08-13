var routes= require("express").Router();
var {create,getAll} = require("../controllers/userController")
routes.get("/getUsers",getAll)
routes.post("/createUser",create)
module.exports=routes;
