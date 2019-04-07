//configuracion de la base de datos en mogodb
const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean';
mongoose.connect(URI, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', error => console.error(error))
db.once('open', error => console.log('Conectado a la base de datos'))

module.exports = mongoose;