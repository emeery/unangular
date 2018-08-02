

// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes
import { Routes, RouterModule } from '@angular/router';

import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';


const routes: Routes = [
  {
    path: 'peliculas',
    component: ListaPeliculasComponent,
  },
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);

