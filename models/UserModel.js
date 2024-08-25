// const {db}=require("./definitions/users")
const {db}=require("../bin/DBconnection")
const {roles}=require("./definitions/roles")
const sequelize=require("./index")
const { Model } = require("sequelize")

module.exports={
    createUser:async(body)=>{
try{
    const user=await sequelize.models.users.create({...body})
return {
    response:user
}}
catch(error){
console.log(error)
return error
}
    },
  getAllUsers:async()=>{
       try{
        const users= await sequelize.models.users.findAll({
            // attributes:["userId","username"]
            attributes:{exclude:["password"]}
        })
        return {response:users}
       }
  catch(error){
    console.log(error)
    return error
    }
}
}