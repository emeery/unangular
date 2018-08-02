import { Component } from '@angular/core';

import {ListaPeliculasComponent} from './lista-peliculas/lista-peliculas.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Una App de Peliculas';
}
