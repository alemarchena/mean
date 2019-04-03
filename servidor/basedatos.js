//configuracion de la base de datos en mogodb
const mongoose = require('mongoose');

const config = {
    autoIndex: false,
    //uri: 'mongodb://localhost/mean-anuncios',
    uri: 'mongodb+ srv://alemarchena:<Picapiedra2887>@cluster0-ryhy7.mongodb.net/test?retryWrites=true',
    opt:{useNewUrlParser:true}
};


mongoose.connect(config.uri, config.opt)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.err(err));
            


module.exports = mongoose;