const express = require('express');
const routerE = express.Router(); //guarda las rutas al servidor
const controladorEmpresa = require('../controlador/empresa.controlador');


routerE.get('/empresas/', controladorEmpresa.leerEmpresas);
routerE.get('/empresas/:id', controladorEmpresa.leerEmpresa);
routerE.post('/empresas/', controladorEmpresa.crearEmpresa);
routerE.put('/empresas/:id', controladorEmpresa.actualizarEmpresa);
routerE.delete('/empresas/:id', controladorEmpresa.borrarEmpresa);

module.exports = routerE;