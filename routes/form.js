const express = require('express');
const router = express.Router();
const path = require('path');

//localhost:3000/form

router.get('/', function(req, res, next) {
    res.render('form');
  });

  router.post('/recoger',(req,res)=>{

    //recoger los datos del formulario
    let nombre = req.body.nombre;
    let dominio = req.body.dominio;
    let colores = req.body.colores;
    let telefono = req.body.telefono;
    let direccion = req.body.direccion;
    let puesto = req.body.puesto;
    

console.log(req.body);
res.send(nombre + " - " + dominio + " - " + colores + " - " + telefono
+ " - " + direccion + " - " + puesto)
})
  


  module.exports = router;