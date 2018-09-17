
// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes
import { Routes, RouterModule } from '@angular/router';

import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ContactoComponent} from './contacto/contacto.component';
import { CrearPeliculaComponent} from './crear-pelicula/crear-pelicula.component';
import { PlaygroundComponent} from './playground/playground.component';
const routes: Routes = [
  {
    path: '',
    component: ListaPeliculasComponent,
    pathMatch: 'full',
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'agregarpelicula',
    component: CrearPeliculaComponent,
  },
  {
    path: 'agregarpelicula/:titulo/:director/:fecha',
    component: CrearPeliculaComponent,
  },
  {
    path: 'playground',
    component: PlaygroundComponent,
  }
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);

