import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarnuevotemaComponent } from './editarnuevotema/editarnuevotema.component';
import { ListaTemaDetallesComponent } from './lista-tema-detalles/lista-tema-detalles.component';
import { ListaTemaComponent } from './lista-tema/lista-tema.component';
import { NuevoTemaComponent } from './nuevo-tema/nuevo-tema.component';

const routes: Routes = [
  { path: 'Lista', component: ListaTemaComponent },
  { path: 'detalle/:num', component: ListaTemaDetallesComponent },
  { path: 'nuevo-tema', component: NuevoTemaComponent },
  { path: 'editar-nuevo-tema/:tema', component: EditarnuevotemaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
