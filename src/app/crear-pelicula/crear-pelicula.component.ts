import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Pelicula} from '../model/pelicula';
import {PeliculasServicio} from '../services/peliculas.services';
@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css'],
  providers: [PeliculasServicio],
})
export class CrearPeliculaComponent {
  constructor(
    private _unServicio: PeliculasServicio,
    private _router: Router) {}
  crearPelicula(titulo, director, anio) {
    const unapelicula = new Pelicula(27, titulo, director, anio);
    this._unServicio.insertarPelicula(unapelicula);
  }

}
