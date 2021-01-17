const express = require('express');
const router = express.Router();
const path = require('path');

//localhost:3000/travel

router.get('/', function(req,res,next){
    res.render('travel');
});

module.exports = router;