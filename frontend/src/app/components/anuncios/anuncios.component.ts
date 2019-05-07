import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../../services/anuncios.service';
import { NgForm } from '@angular/forms';
import { Anuncios } from 'src/app/models/anuncios';
@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css'],
  providers: [AnunciosService]
})
export class AnunciosComponent implements OnInit {

  constructor(private anunciosService: AnunciosService) { }

  ngOnInit() {
  }

  AgregarAnuncio(form? : NgForm){
    console.log(form.value);
    if(form){
      this.anunciosService.postAnuncio(form.value)
        .subscribe(res => { //escucha el retorno del servidor
          console.log(res);
      });
    }
  }

  ResetearFormulario(form? : NgForm){
    if(form){
      form.reset();
      this.anunciosService.anuncioSeleccionado = new Anuncios();
    }else{

    }
  }
}
