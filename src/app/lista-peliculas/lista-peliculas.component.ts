import { Component, OnInit } from '@angular/core';
import { Pelicula} from '../modelo/pelicula';
@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./playground-flex.css']
})
export class ListaPeliculasComponent {
  public pelicula:Pelicula;
  public mostrarDatos:boolean;

  constructor() {
    this.pelicula = new Pelicula(1, "El caballero de la Noche", "Christopher Nolan", 2008 );

    this.anuncio();
    this.mostrarDatos = false;
  }
  anuncio(){
    console.log(this.pelicula);
  }
  botonMostrar(){
    this.mostrarDatos = !this.mostrarDatos;
  }
}
