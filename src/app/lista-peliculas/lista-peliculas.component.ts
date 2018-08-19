import { Component, OnInit } from '@angular/core';
import { Pelicula} from '../model/pelicula';
import {PeliculasServicio} from '../services/peliculas.services';
@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  providers: [PeliculasServicio],
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent {
  public pelicula: Pelicula;
  public mostrarDatos: boolean;
  public peliculaElegida: Pelicula;
  public peliculas; // arreglo
  constructor(private _peliculaServicio: PeliculasServicio) {
    this.mostrarDatos = false;
    this.peliculas = _peliculaServicio.getPeliculas();
    this.peliculaElegida = this.peliculas[0];
    this.pelicula = this.peliculas[0];
    this.anuncio();
  }
  anuncio() {
    console.log(this.peliculas[1] );
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
