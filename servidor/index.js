require('dotenv').config();

//valida la variable del servidor en produccion
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').parse('DATABASE_URL');
}

//requerimientos
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { mongoose } = require('./basedatos'); //aqui tengo la conexion de mongoose a la base de datos
const app = express(); //aqui toma toda la funcionalidad del servidor  y la coloca en la variable app
const expressLayouts = require('express-ejs-layouts')
const rutas = require('./rutas/anuncios.rutas');

//configuraciones
app.set('puerto', process.env.PORT || 3000)

//objetos
app.use(morgan('start')); //las peticiones pasan por MORGAN y devuelven info tal como un error.
app.use(express.json()); //los datos que llegan del navegador se interpretan como json

app.use(express.static('/servidor/public'));
app.use('/', rutas);
app.use(cors({ origin:'https://mean-templay.herokuapp.com/'}));

app.listen(app.get('puerto'), () => {
    const puertoconectado = app.get('puerto');
    console.log("Servidor iniciado en puerto " + puertoconectado);
});