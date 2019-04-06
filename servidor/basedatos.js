//configuracion de la base de datos en mogodb
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://alejandro:V8dZv8A7Iip1IoKr@cluster0-ryhy7.mongodb.net/anunciosbdd?retryWrites=true', { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', error => console.error(error))
db.once('open', error => console.log('Conectado a la base de datos'))

module.exports = mongoose;