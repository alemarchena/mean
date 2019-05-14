import { Injectable } from '@angular/core';
//importamos funcionalidad de angular para comunicar a angular con el servidor
import { HttpClient } from '@angular/common/http';
import { Anuncios } from '../models/anuncios';

@Injectable({
  providedIn: 'root'
})

//Servicio que permite hacer el CRUD
export class AnunciosService 
{
  readonly URL_API = 'https://mean-templay.herokuapp.com/';
  //readonly URL_API = 'https://localhost:3000';
  anuncioSeleccionado: Anuncios; 
  anuncios: Anuncios[]; //aqui se va a guardar lo que retorne de la consulta

//instanciamos el http client y tener disponible en la clase de servicio la propiedad http
  constructor(private http:HttpClient) { 
    this.anuncioSeleccionado = new Anuncios();
  }

  getAnuncios()
  {
    return this.http.get(this.URL_API);
  }

  postAnuncio(anuncio: Anuncios){
    return this.http.post(this.URL_API,anuncio);
  }

  putAnuncio(anuncio: Anuncios){
    return this.http.put(this.URL_API + `/${anuncio._id}`,anuncio);
  }

  deleteAnuncio(_id: String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
