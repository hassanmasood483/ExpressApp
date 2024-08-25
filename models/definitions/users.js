const {Model , DataTypes} = require("sequelize")
const sequelize = require("../../bin/DBconnection")

class users extends Model{}

// users.init initializes the user and it takes two objetcs (attributes and options).
users.init ({
userId:{
    type:DataTypes.STRING(60),
    primaryKey: true,
},
username:{
    type:DataTypes.STRING(34),
    unique:true,
    allowNull:false,
},
password:{
type:DataTypes.STRING(256),
allowNull:false,
},
},
{
    timestamps:true, //created at,updated at
    paranoid:true, // does not deleted completely
    modelName:"users",
    sequelize,
})
module.exports=users