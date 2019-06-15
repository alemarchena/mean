const mongoose = require('mongoose');

const { Schema } = mongoose; //no necesito todo mongoose, entonces solo armo el esquema

const empresascol = new Schema({
    idpanel: { type: Number},
    idmapa: { type: Number },
    nombreempresa: { type: String, required: true },
    imagen: { type: String, required: true }
});

module.exports = mongoose.model('coleccionempresas', empresascol); //le digo a mongodb como se va a llamar el esquema y cual es su tipo