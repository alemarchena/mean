const express = require('express');
const routerE = express.Router(); //guarda las rutas al servidor
const controladorEmpresa = require('../controlador/empresa.controlador');


routerE.get('/', controladorEmpresa.leerEmpresas);
routerE.get('/:id', controladorEmpresa.leerEmpresa);
routerE.post('/', controladorEmpresa.crearEmpresa);
routerE.put('/:id', controladorEmpresa.actualizarEmpresa);
routerE.delete('/:id', controladorEmpresa.borrarEmpresa);

module.exports = routerE;