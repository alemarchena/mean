//va a tener las funciones para trabajar con la base de datos
const ModeloAnuncio = require('../modelos/modelo.anuncios');


const controladorAnuncio = {};


controladorAnuncio.leerAnuncios = async (req,res) => {
    const anuncios = await ModeloAnuncio.find();
    res.json(anuncios);
}

controladorAnuncio.leerAnuncio = async (req,res) => {

    const anuncio = await ModeloAnuncio.findById(req.params.id); 
    res.json(anuncio);
}

controladorAnuncio.crearAnuncio = async (req,res) => {
    const anuncio = new ModeloAnuncio({
        idmapa: req.body.idmapa,
        nombre: req.body.nombre,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        nombreP: req.body.nombreP,
        tituloP: req.body.tituloP,
        descripcionP: req.body.descripcionP,
        nombreI: req.body.nombreI,
        tituloI: req.body.tituloI,
        descripcionI: req.body.descripcionI,
        precio: req.body.precio,
        imagen: req.body.imagen
    });
    await anuncio.save();
    res.json({
        'estado': 'Anuncio guardado'
    });
}

controladorAnuncio.actualizarAnuncio = async (req,res) => {
    const {id} = req.params; //le digo dame id que este dentro de params
    const anuncio = {
        idmapa : req.body.idmapa,
        nombre: req.body.nombre,
        titulo : req.body.titulo,
        descripcion : req.body.descripcion,
        nombreP: req.body.nombreP,
        tituloP : req.body.tituloP,
        descripcionP : req.body.descripcionP,
        nombreI: req.body.nombreI,
        tituloI : req.body.tituloI,
        descripcionI : req.body.descripcionI,
        precio : req.body.precio,
        imagen : req.body.imagen
    }
    await ModeloAnuncio.findByIdAndUpdate(id,{ $set:anuncio },{new: true}); //le digo que busco por id y que datos quiero actualizar, con new : true si no existe lo crea
    res.json({
        status:"Anuncio actualizado"
    });
}


controladorAnuncio.borrarAnuncio = async (req,res)=> {
    const {id} = req.params;
    await ModeloAnuncio.findByIdAndRemove(id);
    res.json({status:'Anuncio eliminado'});
}

module.exports = controladorAnuncio;