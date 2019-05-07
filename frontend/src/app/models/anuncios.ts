export class Anuncios 
{
    constructor(_id='',nombre='',idmapa = 0, titulo='',descripcion = '',precio=0,imagen='')
    {
        this._id = _id;
        this.nombre = nombre;
        this.idmapa = idmapa;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
    _id: string;
    nombre: String;
    idmapa: Number;
    titulo: String;
    descripcion: String;
    precio: Number;
    imagen: String;

}
