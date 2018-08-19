import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {Pelicula} from '../model/pelicula'; // modelo
import {PeliculasServicio} from '../services/peliculas.services'; /*servicios o funciones*/
@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css'],
  providers: [PeliculasServicio],
})
/*public id: number;*/
export class CrearPeliculaComponent implements OnInit {
  public untitulo = '';
  public nuevaPelicula: Pelicula;
  constructor(
    private _unServicio: PeliculasServicio,
    private _router: Router,
    private route: ActivatedRoute) {}
  unSubmit() {
    this._unServicio.insertarPelicula(this.nuevaPelicula);
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
