
const {createUser,getAllUsers}=require("../models/UserModel")
const responseHandler=require("../ResponseHandler")

module.exports={
    create:async (req,res) => {
try{
const user= await createUser(req.body)
responseHandler(user,res)
}
catch(error){
    console.log(error)
    return error
    }
        },
getAll: async(req,res)=>{
    try{
        const users= await getAllUsers()
        responseHandler(users,res)}
        catch(error){
            console.log(error)
            return error
            }
    }
}
    