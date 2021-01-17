const express = require('express');
const router = express.Router();
const path = require('path')


//localhost:3000/pets/home
router.get('/home', function(req, res, next) {
    res.render('pets', { title: 'Título mascotas', title2: 'subtitulo de la pagina',
                name1: 'perro 1', description1: 'Descripción del perro 1', name2: 'perro 2', description2: 
            'descripción del perro 2', name3: 'nombre 3', description3: 'descripción del perro 3' });
  });
  


  module.exports = router;