//va a tener las funciones para trabajar con la base de datos
const ModeloAnuncio = require('../modelos/modelo.empresas');


const controladorEmpresa = {};


controladorEmpresa.leerEmpresas = async (req, res) => {
    const empresas = await ModeloEmpresa.find();
    res.json(empresas);
}

controladorEmpresa.leerEmpresa = async (req, res) => {

    const empresa = await ModeloEmpresa.findById(req.params.id);
    res.json(empresa);
}

controladorEmpresa.crearEmpresa = async (req, res) => {
    const empresa = new ModeloEmpresa({
        idpanel: req.body.idpanel,
        idmapa: req.body.idmapa,
        nombreempresa: req.body.nombreempresa,
        imagen: req.body.imagen
    });
    await empresa.save();
    res.json({
        'estado': 'Empresa guardada'
    });
}

controladorEmpresa.actualizarEmpresa = async (req, res) => {
    const { id } = req.params; //le digo dame id que este dentro de params
    const empresa = {
        idpanel: req.body.idpanel,
        idmapa: req.body.idmapa,
        nombreempresa: req.body.nombreempresa,
        imagen: req.body.imagen
    }
    await ModeloEmpresa.findByIdAndUpdate(id, { $set: empresa }, { new: true }); //le digo que busco por id y que datos quiero actualizar, con new : true si no existe lo crea
    res.json({
        status: "Empresa actualizada"
    });
}


controladorEmpresa.borrarEmpresa = async (req, res) => {
    const { id } = req.params;
    await ModeloEmpresa.findByIdAndRemove(id);
    res.json({ status: 'Empresa eliminada' });
}

module.exports = controladorEmpresa;