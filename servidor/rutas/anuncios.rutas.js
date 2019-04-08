const express = require('express');
const router = express.Router();
const controladorAnuncio= require('../controlador/anuncio.controlador');


router.get('/pagina/', (req,res) =>{res.render('index');}); // renderiza la vista index en views

router.get('/:id', controladorAnuncio.leerAnuncio);
router.post('/', controladorAnuncio.crearAnuncio);
router.put('/:id', controladorAnuncio.actualizarAnuncio);
router.delete('/:id', controladorAnuncio.borrarAnuncio);

module.exports = router;