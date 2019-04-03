//configuracion de la base de datos en mogodb
const mongoose = require('mongoose');


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<alejandro>:<aaabbbccc>@cluster0-ryhy7.mongodb.net/anuncios-templay?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err,db => 
    { 
        const collection = client.db("dbbanuncios").collection("coleccionanuncios"); 
        client.close(); 
    });

/*
const config = {
    autoIndex: false,
    uri: 'mongodb + srv://alemarchena:<Picapiedra2887>@cluster0-ryhy7.mongodb.net/test?retryWrites=true',
    opt:{useNewUrlParser:true}
};


mongoose.connect(config.uri, config.opt)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.err(err));
            
*/

module.exports = mongoose;