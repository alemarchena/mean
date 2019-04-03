//configuracion de la base de datos en mogodb
const mongoose = require('mongoose');

const config = {
    autoIndex: false,
    uri: 'mongodb://localhost/mean-anuncios',
    opt:{useNewUrlParser:true}
};


mongoose.connect(config.uri, config.opt)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.err(err));
            


module.exports = mongoose;