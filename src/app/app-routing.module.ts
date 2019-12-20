import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { PlantaComponent } from './components/planta/planta.component';
import { AtractivoComponent } from './components/atractivo/atractivo.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';


//Importar los componentes para generar las rutas
const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'planta', component: PlantaComponent},
  { path: 'atractivo', component: AtractivoComponent},
  { path: 'reportes', component: ReportesComponent},
  { path: 'analisis', component: AnalisisComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'roles', component: RolesComponent},
  { path: 'about', component: AcercadeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
