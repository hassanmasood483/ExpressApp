const {hash,compare}= require("bcryptjs")
const user = [{
    username:"newuser0",
    password:"12345678"
}
]
module.exports={

    create: async (req,res)=>{
       
        try{
          let {username,password}= req.body
            user.map((user)=>{
                if(user.username==username){
                    return res.send({
                         response:"user already exists"
                    })     
                    }})
                password = await hash(password,10)
                
            // const newuser={...req.body}
            // user.push(newuser)
            user.push({username,password})
            return res.send ({
                response:user

            })
        }
        catch (error) {
            console.log(error)
            return res.send({
                error
            })
        }
    },
    getAll: (req,res)=>{
        try{
            return res.send ({
                response:user,
            })
        }
        catch (error) {
            return res.send({
                error
            })
        }
    },
    getByusername:(req,res)=>{
        try{
            const {username}=req.query
            user.map ( (user)=>{
            if (user.username==username){
            return  res.send ({
               response:user
            })}})
            return res.send({
                response:"user does not exist"
            })
        }
        catch (error) {
            return res.send({
                error
            })
        }
    },

    deleteUser: async (req, res) => {
        try {
          let { username, password } = req.query;
          let userDeleted = false;
    
          //The map function itself does not handle promises or async operations so use promise.all
          await Promise.all(
            user.map(async (user,index,array) => {
              if (user.username === username) {
                const isMatch = await compare(password, user.password);
                if (isMatch) {
                  array.splice(index, 1); // Remove user from the array
                  userDeleted = true; // Set flag to true
                }
              }
            })
          );
    
          if (userDeleted) {
            return res.send({
              response: `User deleted successfully`,
            });
          } else {
            return res.send({
              response: "user not found",
            });
          }
        } catch (error) {
          return res.send({
            error: error.message,
          });
        }
      },
    };
