import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import {AnalisisComponent} from './components/analisis/analisis.component';
import {FichainventarioComponent} from './components/fichainventario/fichainventario.component';


//Importar los componentes para generar las rutas
const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'analisis', component: AnalisisComponent},
  { path: 'fichas', component: FichainventarioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
