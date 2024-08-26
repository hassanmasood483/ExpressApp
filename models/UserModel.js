// const {db}=require("./definitions/users")
// const {db}=require("../bin/DBconnection")
// const {roles}=require("./definitions/roles")
// const sequelize=require("./index")

const {models} = require("./index")

module.exports={
    createUser:async(body)=>{
try{
    const user=await models.users.create({...body})
return {
    response:user
}}
catch(error){
console.log(error)
return {error:error}
}
    },
  getAllUsers:async()=>{
       try{
        const users= await models.users.findAll({
            // attributes:["userId","username"]
            attributes:{exclude:["password"]}
        })
        return {response:users}
       }
  catch(error){
    console.log(error)
    return {error:error}
    }
}
}