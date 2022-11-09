import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTemaComponent } from './lista-tema/lista-tema.component';
import { ListaTemaDetallesComponent } from './lista-tema-detalles/lista-tema-detalles.component';
import { NuevoTemaComponent } from './nuevo-tema/nuevo-tema.component';
import { DatosComponent } from './datos/datos.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { EditarnuevotemaComponent } from './editarnuevotema/editarnuevotema.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTemaComponent,
    ListaTemaDetallesComponent,
    NuevoTemaComponent,
    DatosComponent,
    CabeceraComponent,
    EditarnuevotemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
