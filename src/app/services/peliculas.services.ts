import {Injectable} from '@angular/core';
import {PELICULAS} from '../services/mock.peliculas';
@Injectable()
export class PeliculasServicio {
  getPeliculas() {
    return PELICULAS;
  }
}
