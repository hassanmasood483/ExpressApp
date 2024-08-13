
var router = require('express').Router()
// create users
router.get('/create',(req,res)=>{
  res.send("users created successfully")
})
// get all users
router.get('/getUsers',(req,res)=>{
  res.send("users")
})
// update users 
router.get('/update',(req,res)=>{
  res.send("user updated")
})
// delete users
router.get('/delete',(req,res)=>{
  res.send("user deleted")
})
module.exports = router;
