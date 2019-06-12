const mongoose = require('mongoose');

const {Schema} = mongoose; //no necesito todo mongoose, entonces solo armo el esquema

const anuncioscol = new Schema({
    idpanel:    {type: Number},
    idmapa:     {type: Number },
    nombre:     {type: String,required:true},
    titulo:     {type: String,required:true},
    descripcion:{type:String,required:true},
    precio:     {type:String,required:true},
    imagen:     {type: String,required:true}
});

module.exports = mongoose.model('coleccionanuncios', anuncioscol); //le digo a mongodb como se va a llamar el esquema y cual es su tipo