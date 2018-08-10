import {Injectable} from '@angular/core';
import {PELICULAS} from '../services/mock.peliculas';
import { Pelicula } from '../model/pelicula';
@Injectable()
export class PeliculasServicio {
  getPeliculas() {
    return PELICULAS;
  }
  insertarPelicula(pelicula: Pelicula) {
    Promise.resolve(PELICULAS).then((movie: Pelicula[]) => movie.push(pelicula));
  }
}
