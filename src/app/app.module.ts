import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculasComponent
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
