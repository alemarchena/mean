/*el index js es el que inicializa el servidor
    express es el framework del lado del servidor y
    utiliza javascript del lado del servidor
*/
const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./basedatos'); //aqui tengo la conexion de mongoose a la base de datos

const app = express(); //aqui toma toda la funcionalidad del servidor  y la coloca en la variable app

// configuracion del servidor
app.set('puerto', process.env.PORT || 3000)
app.use(morgan('start')); //las peticiones pasan por MORGAN y devuelven info tal como un error.
app.use(express.json()); //los datos que llegan del navegador se interpretan como json

// rutas para el servidor
app.use('/api/anuncios/', require('./rutas/anuncios.rutas'));

// inicia el servidor
app.listen(app.get('puerto'), () => {
    console.log("Servidor en puerto " + puerto);
});