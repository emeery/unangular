import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import {routing} from './app.routes';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearPeliculaComponent } from './crear-pelicula/crear-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculasComponent,
    FooterComponent,
    ContactoComponent,
    CrearPeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
