const mongoose = require('mongoose');

const {Schema} = mongoose; //no necesito todo mongoose, entonces solo armo el esquema

const anuncioscol = new Schema({
    nombre:     {type: String,required:true},
    idmapa:     {type: String},
    titulo:     {type: String,required:true},
    descripcion:{ type:String,required:true},
    precio:     {type:Number,required:true},
    imagen:     {type: String,required:true}
});

module.exports = mongoose.model('coleccionanuncios', anuncioscol); //le digo a mongodb como se va a llamar el esquema y cual es su tipo