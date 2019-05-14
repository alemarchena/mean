import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../../services/anuncios.service';
import { NgForm } from '@angular/forms';
import { Anuncios } from 'src/app/models/anuncios';

declare var M: any; //toma un dato desde materialize

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css'],
  providers: [AnunciosService]
})
export class AnunciosComponent implements OnInit {

  constructor(private anunciosService: AnunciosService) { }

  ngOnInit() {
    this.LeerAnuncios();
  }

  AgregarAnuncio(form? : NgForm){
    if(form.value._id) // si el anuncios.component.html tiene en su id algo, entonces actualiza
    {
      this.anunciosService.putAnuncio(form.value).subscribe(res =>{
          this.ResetearFormulario(form);
          M.toast({ html: 'Actualizado correctamente' });
          this.LeerAnuncios();
      });
    }else{
      this.anunciosService.postAnuncio(form.value)
        .subscribe(res => { //escucha el retorno del servidor
          this.ResetearFormulario(form);
          M.toast({ html: 'Guardado correctamente' });
          this.LeerAnuncios();
        });
    }
  }

  EliminarAnuncio(_id: string)
  {
    if (confirm('Seguro desea eliminar?')){
      this.anunciosService.deleteAnuncio(_id).subscribe(res => {
        this.LeerAnuncios();
        M.toast({html: ' Eliminado satisfactoriamente'});
      });
    }

    
  }

  LeerAnuncios(){
    this.anunciosService.getAnuncios().subscribe(res => {
        this.anunciosService.anuncios = res as Anuncios[]; 
        console.log(res);
    });
  }
  EditarAnuncio(anuncio : Anuncios){
    this.anunciosService.anuncioSeleccionado = anuncio;

  }
  ResetearFormulario(form? : NgForm){
    if(form){
      form.reset();
      this.anunciosService.anuncioSeleccionado = new Anuncios();
    }else{

    }
  }
}
