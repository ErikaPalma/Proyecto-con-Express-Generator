const express = require('express');
const router = express.Router();
const path = require('path')


//localhost:3000/forty
router.get('/', function(req, res, next) {
    res.render('forty');
  });
  


  module.exports = router;