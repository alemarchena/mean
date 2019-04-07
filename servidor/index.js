require('dotenv').config();

//valida la variable del servidor en produccion
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').parse('DATABASE_URL');
}

//requetimientos
const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./basedatos'); //aqui tengo la conexion de mongoose a la base de datos
const app = express(); //aqui toma toda la funcionalidad del servidor  y la coloca en la variable app
const expressLayouts = require('express-ejs-layouts')
const rutas = require('./rutas/anuncios.rutas');

//configuraciones
app.set('puerto', process.env.PORT || 3000)
app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout',__dirname + '/views/layouts/layout');

//objetos
app.use(morgan('start')); //las peticiones pasan por MORGAN y devuelven info tal como un error.
app.use(express.json()); //los datos que llegan del navegador se interpretan como json
app.use(expressLayouts);
app.use(express.static('/servidor/public'));
app.use('/', rutas);

app.listen(app.get('puerto'), () => {
    const puertoconectado = app.get('puerto');
    console.log("Servidor iniciado en puerto " + puertoconectado);
});