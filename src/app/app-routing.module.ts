import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import {AnalisisComponent} from './components/analisis/analisis.component';
import {FichainventarioComponent} from './components/fichainventario/fichainventario.component';
import {PlantaComponent} from './components/planta/planta.component';


import {AtractivoComponent} from './components/atractivo/atractivo.component';


//Importar los componentes para generar las rutas
const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'analisis', component: AnalisisComponent},
  { path: 'fichas', component: FichainventarioComponent},
  { path: 'fichas/planta', component: PlantaComponent},
  { path: 'fichas/atractivo', component: AtractivoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "ignore",
      anchorScrolling:'enabled',
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
