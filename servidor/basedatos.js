//configuracion de la base de datos en mogodb
const mongoose = require('mongoose');

const config = {
    autoIndex: false,
    uri: 'mongodb+srv://alemarchena:Picapiedra2887@cluster0-ndsgy.mongodb.net/anunciosdbb?retryWrites=true',
    opt:{useNewUrlParser:true}
};


mongoose.connect(config.uri, config.opt)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.err(err));


module.exports = mongoose;