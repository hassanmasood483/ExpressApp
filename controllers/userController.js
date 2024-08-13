module.exports={

    create: (req,res)=>{
        try{
            return res.send ({
                response:'created user',
            })
        }
        catch (error) {
            return res.send({
                error
            })
        }
    },
    getAll: (req,res)=>{
        try{
            return res.send ({
                response:'get all users',
            })
        }
        catch (error) {
            return res.send({
                error
            })
        }
    }




}