

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
            attributes:{exclude:["password","roleId"]},
            include:[
                {
                    model:models.roles,
                    attributes:["role","roleId"]
                }
            ]
        })
        return {response:users}
       }
  catch(error){
    console.log(error)
    return {error:error}
    }
},


getUser:async({userId,username})=>{
    try{
     const user= await models.users.findOne({
        where:{
            ...(userId?{userId:userId}:{username:username})
        },
         attributes:{exclude:["password","roleId"]},
         include:[
             {
                 model:models.roles,
                 attributes:["roleId","role"]
             }
         ]
     })
     return {response:user}
    }
catch(error){
 console.log(error)
 return {error:error}
 }
},


deleteUser:async({userId,username})=>{
    try{
     const user= await models.users.destroy({
        where:{
            ...(userId?{userId:userId}:{username:username})
        },
     })
     return {response:user} //will return 1 or 0
    }
catch(error){
 console.log(error)
 return {error:error}
 }
}
}