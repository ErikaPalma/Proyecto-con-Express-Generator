const express = require('express');
const router = express.Router();
const path = require('path');

//localhost:3000/music

router.get('/', function(req,res,next){
    res.render('music');
});


module.exports = router;