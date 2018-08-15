import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {Pelicula} from '../model/pelicula';
import {PeliculasServicio} from '../services/peliculas.services';
@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css'],
  providers: [PeliculasServicio],
})

export class CrearPeliculaComponent implements OnInit {
  public untitulo = '';
  //public id: number;
  constructor(
    private _unServicio: PeliculasServicio,
    private _router: Router,
    private route: ActivatedRoute) {}
  crearPelicula(titulo, director, anio) {
    const unapelicula = new Pelicula(27, titulo, director, anio);
    this._unServicio.insertarPelicula(unapelicula);
    this._router.navigate(['/peliculas']);
  }
  ngOnInit() {
    // Recogemos los parametros de la URL
     this.route.params.subscribe(params => {
        if (params['titulo'] != null) {
            this.untitulo = params['titulo'];
        }
     });
}
}
