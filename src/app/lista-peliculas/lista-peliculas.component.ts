import { Component, OnInit } from '@angular/core';
import { Pelicula} from '../modelo/pelicula';
@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent {
  public pelicula: Pelicula;
  public mostrarDatos: boolean;
  public peliculaElegida: Pelicula;
  public peliculas; // arreglo
  constructor() {
    this.mostrarDatos = false;
    this.peliculaElegida = new Pelicula(
      1, 'El caballero de la Noche', 'Christopher Nolan', 2008);
    this.peliculas = [
      new Pelicula(
        1, 'El caballero de la Noche', 'Christopher Nolan', 2008),
      new Pelicula(
        2, 'El hotel Budapest', 'Wes Anderson', 2014 ),
      new Pelicula(
        3, 'El Señor de los Anillos', 'Peter Jackson', 2001),
      new Pelicula(
        4, 'El club de la pelea', 'David Fincher', 1999)
    ];
    this.pelicula = this.peliculas[0];
    this.anuncio();
  }
  anuncio() {
    console.log(this.pelicula);
  }
  botonMostrar() {
    this.mostrarDatos = !this.mostrarDatos;
  }
  cambiarPelicula(pelicula) {
    this.pelicula = pelicula;
    this.peliculaElegida = pelicula;

  }

}


// array public peliculas: array<Pelicula>;
