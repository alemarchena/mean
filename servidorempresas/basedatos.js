//configuracion de la base de datos en mogodb
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log('Conectado a la base de datos de empresas'))

module.exports = mongoose;