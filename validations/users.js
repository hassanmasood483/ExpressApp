const Joi = require('joi');


module.exports={
    createUserSchema: async (req,res,next)=>{
    const createUser = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30)
        .required(),
        password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()})
    try{
        const validate =await createUser.validateAsync(req.body)
        next()
    }
    catch (error){
        return res.send({
            error
        }
        )}},
    
    
        userSchema: async (req,res,next)=>{
            const username = Joi.object({
            username: Joi.string()
                .min(3)
                .max(30)
                .required(),
                // password: Joi.string()
                // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
            })
            try{
                const validate =await username.validateAsync(req.query)
                next()
            }
            catch (error){
                return res.send({
                    error
                }
                )}}
    
    
    
    
    }
