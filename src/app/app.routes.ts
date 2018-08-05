

// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes
import { Routes, RouterModule } from '@angular/router';

import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ContactoComponent} from './contacto/contacto.component';
import { CrearPeliculaComponent} from './crear-pelicula/crear-pelicula.component';

const routes: Routes = [
  {
    path: 'peliculas',
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
  }
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);

