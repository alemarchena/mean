const express = require('express');
const router = express.Router(); //guarda las rutas al servidor
const controladorAnuncio = require('../controlador/empresa.controlador');


router.get('/empresas/', controladorEmpresa.leerEmpresas);
router.get('/empresas/:id', controladorEmpresa.leerEmpresa);
router.post('/empresas/', controladorEmpresa.crearEmpresa);
router.put('/empresas/:id', controladorEmpresa.actualizarEmpresa);
router.delete('/empresas/:id', controladorEmpresa.borrarEmpresa);

module.exports = router;