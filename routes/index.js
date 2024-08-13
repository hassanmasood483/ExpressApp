var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', (req, res)=>{
  return res.send("welcome to home page")
});

module.exports = router;
