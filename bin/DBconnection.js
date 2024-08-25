require ("dotenv").config()
const {Sequelize}= require("sequelize")
const sequelize = new Sequelize({
    dialect:process.env.DB_DIALECT,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE,
    host:process.DB_HOST,
})
sequelize.authenticate().then(()=>{
    console.log("database is connected")
}).catch((error)=>{
    console.log("failed to connect to the database",error)
})

module.exports=sequelize;
