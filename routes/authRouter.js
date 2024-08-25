var routes= require("express").Router();
const {login,logout} = require("../controllers/authController")
const {loginUserSchema}= require("../validations/auth")
routes.post("/login",loginUserSchema,login)
routes.post("/logout",logout)

module.exports=routes;
