import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../model/pelicula';
import {PeliculasServicio} from '../services/peliculas.services';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css'],
  providers: [PeliculasServicio],
})
export class CrearPeliculaComponent implements OnInit {
	public tituloPelicula = "";
  public directorPelicula = "";
  public fecha;
  public nuevaPelicula: Pelicula;
	constructor(
	private _unServicio: PeliculasServicio,
	private _unRouter: Router,
  private route: ActivatedRoute )
	{}
  unSubmit () {
    this._unServicio.insertarPelicula(this.nuevaPelicula);
    this._unRouter.navigate(['/']);
  }
  ngOnInit():any {
        // Recogemos los parametros de la URL
         this.route.params.subscribe(params => {
            if(params['titulo']!=null){
                this.tituloPelicula = params['titulo'];
            }
            this.directorPelicula = params['director'];
            this.fecha = params['fecha'];
         });
         this.nuevaPelicula = new Pelicula(
             0,
             this.tituloPelicula,
             this.directorPelicula,
             this.fecha
           );
    }
}
