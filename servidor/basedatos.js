//configuracion de la base de datos en mogodb
const mongoose = require('mongoose');

const config = {
    autoIndex: false,
    uri: 'mongodb+srv://alejandro:V8dZv8A7Iip1IoKr@cluster0-ryhy7.mongodb.net/anunciosbdd?retryWrites=true',
    opt:{useNewUrlParser:true}
};

mongoose.connect(config.uri, config.opt)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.err(err));


module.exports = mongoose;