import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../model/pelicula';
import {PeliculasServicio} from '../services/peliculas.services';
@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css'],
  providers: [PeliculasServicio],
})
export class CrearPeliculaComponent {
  crearPelicula(titulo, director, anio) {
    const unapelicula = new Pelicula(27, titulo, director, anio);
    console.log(unapelicula);
  }

}
