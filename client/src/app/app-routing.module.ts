import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarJuegosComponent } from './components/listar-juegos/listar-juegos.component';
import { FormJuegosComponent } from './components/form-juegos/form-juegos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/juegos',
    pathMatch: 'full'
  },
  {
    path: 'juegos',
    component: ListarJuegosComponent
  },
  {
    path: 'juegos/agregarJuego',
    component: FormJuegosComponent
  },
  {
    path: 'juegos/editarJuego/:id',
    component: FormJuegosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
