import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';

import {PlantaComponent} from './components/fichasInventario/plantaTuristica/planta/planta.component';
import {ListaPlantasComponent} from './components/fichasInventario/plantaTuristica/lista-plantas/lista-plantas.component';
import {HomePlantaComponent} from './components/fichasInventario/plantaTuristica/home-planta/home-planta.component';

import {AtractivoComponent} from './components/fichasInventario/atractivoTuristico/atractivo/atractivo.component';
import {ListaAtractivosComponent} from './components/fichasInventario/atractivoTuristico/lista-atractivos/lista-atractivos.component';
import {HomeAtractivoComponent} from './components/fichasInventario/atractivoTuristico/home-atractivo/home-atractivo.component';

import {HomeReportesComponent} from './components/reportes/home-reportes/home-reportes.component';
import {ListaReportesComponent} from './components/reportes/lista-reportes/lista-reportes.component';

import {HomeAnalisisComponent} from './components/analisis/home-analisis/home-analisis.component';
import {DashboardComponent} from './components/analisis/dashboard/dashboard.component';

import {HomeSolicitudesComponent} from './components/solicitudes/home-solicitudes/home-solicitudes.component';
import {ListaSolicitudesComponent} from './components/solicitudes/lista-solicitudes/lista-solicitudes.component';
import {SolicitudComponent} from './components/solicitudes/solicitud/solicitud.component';

import {LoginComponent} from './components/login/login.component';

import {SitunaGuard} from './guards/situna.guard'

//Importar los componentes para generar las rutas
const routes: Routes = [
  { path: '', component: InicioComponent, canActivate:[SitunaGuard]},

  { path: 'fichas/crud-atractivo', component: HomeAtractivoComponent, canActivate:[SitunaGuard], children:[
    { path: 'lista', component: ListaAtractivosComponent},
    { path: 'atractivo-edit/:id', component: AtractivoComponent },
    { path: 'atractivo-insert', component: AtractivoComponent }
  ]},

  { path: 'fichas/crud-planta', component: HomePlantaComponent, canActivate:[SitunaGuard], children:[
    { path: 'lista', component: ListaPlantasComponent},
    { path: 'planta-edit/:id', component: PlantaComponent },
    { path: 'planta-insert', component: PlantaComponent }
  ]},

  { path: 'reporteria', component: HomeReportesComponent, canActivate:[SitunaGuard], children:[
    { path: 'lista', component: ListaReportesComponent}
  ]},

  { path: 'analisis', component: HomeAnalisisComponent, canActivate:[SitunaGuard], children:[
    { path: 'dashboard', component: DashboardComponent}
  ]},

  { path: 'solicitudes', component: HomeSolicitudesComponent, canActivate:[SitunaGuard], children:[
    { path: 'lista', component: ListaSolicitudesComponent},
    { path: 'solicitud/:id', component: SolicitudComponent }
  ]},

  { path: 'login', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
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
