const express = require('express');
const router = express.Router(); //guarda las rutas al servidor
const controladorAnuncio= require('../controlador/anuncio.controlador');


//router.get('/', (req,res) =>{res.render('index');});
router.get('/', controladorAnuncio.leerAnuncios);
router.get('/:id', controladorAnuncio.leerAnuncio);
router.post('/', controladorAnuncio.crearAnuncio);
router.put('/:id', controladorAnuncio.actualizarAnuncio);
router.delete('/:id', controladorAnuncio.borrarAnuncio);

module.exports = router;