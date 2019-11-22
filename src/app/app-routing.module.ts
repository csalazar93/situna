import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { AcercadeComponent } from './components/acercade/acercade.component';

//Importar los componentes para generar las rutas
const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'about', component: AcercadeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
