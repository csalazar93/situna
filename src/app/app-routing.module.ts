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

import {HomeFichasComponent} from './components/fichasInventario/home-fichas/home-fichas.component';

import {HomeReportesComponent} from './components/reportes/home-reportes/home-reportes.component';
import {ListaReportesComponent} from './components/reportes/lista-reportes/lista-reportes.component';

import {HomeAnalisisComponent} from './components/analisis/home-analisis/home-analisis.component';
import {DashboardComponent} from './components/analisis/dashboard/dashboard.component';

import {HomeSolicitudesComponent} from './components/solicitudes/home-solicitudes/home-solicitudes.component';
import {ListaSolicitudesComponent} from './components/solicitudes/lista-solicitudes/lista-solicitudes.component';
import {SolicitudComponent} from './components/solicitudes/solicitud/solicitud.component';

import {HomeSistemaComponent} from './components/sistema/home-sistema/home-sistema.component';

import { HomeUsuariosComponent } from './components/sistema/usuarios/home-usuarios/home-usuarios.component';
import { ListaUsuariosComponent } from './components/sistema/usuarios/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './components/sistema/usuarios/usuario/usuario.component';

import { HomeRolesComponent } from './components/sistema/roles/home-roles/home-roles.component';
import { ListaRolesComponent } from './components/sistema/roles/lista-roles/lista-roles.component';
import { RolComponent } from './components/sistema/roles/rol/rol.component';

import { HomeAsignacionesComponent } from './components/sistema/asignacionPermisos/home-asignaciones/home-asignaciones.component';
import { ListaAsignacionesComponent } from './components/sistema/asignacionPermisos/lista-asignaciones/lista-asignaciones.component';
import { AsignarPermisosComponent } from './components/sistema/asignacionPermisos/asignar-permisos/asignar-permisos.component';

import {HomeServiciosComponent} from './components/serviciosC/home-servicios/home-servicios.component';
import {ListaServiciosComponent} from './components/serviciosC/lista-servicios/lista-servicios.component';
import {ServicioComponent} from './components/serviciosC/servicio/servicio.component';

import {LoginComponent} from './components/login/login.component';

import {SitunaGuard} from './guards/situna.guard'

//Importar los componentes para generar las rutas
const routes: Routes = [

  { path: 'sistema/home', component: HomeSistemaComponent, canActivate:[SitunaGuard]},

  { path: 'usuarios', component: HomeUsuariosComponent, canActivate:[SitunaGuard], children:[
    { path: 'lista', component: ListaUsuariosComponent},
    { path: 'usuario/:id', component: UsuarioComponent },
    { path: 'usuario-edit/:id', component: UsuarioComponent },
    { path: 'usuario-insert', component: UsuarioComponent }
  ]},

  { path: 'perfil/:id', component: UsuarioComponent, canActivate:[SitunaGuard]},

  { path: 'roles', component: HomeRolesComponent, canActivate:[SitunaGuard], children:[
    { path: 'lista', component: ListaRolesComponent},
    { path: 'rol/:id', component: RolComponent },
    { path: 'rol-edit/:id', component: RolComponent },
    { path: 'rol-insert', component: RolComponent }
  ]},

  { path: 'asignaciones', component: HomeAsignacionesComponent, canActivate:[SitunaGuard], children:[
    { path: 'lista', component: ListaAsignacionesComponent},
    { path: 'asignacion/:id', component: AsignarPermisosComponent },
    { path: 'asignacion-edit/:id', component: AsignarPermisosComponent },
    { path: 'asignacion-insert', component: AsignarPermisosComponent }
  ]},

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

  { path: 'fichas/home', component: HomeFichasComponent, canActivate:[SitunaGuard]},

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

  { path: 'servicios', component: HomeServiciosComponent, canActivate:[SitunaGuard], children:[
    { path: 'lista', component: ListaServiciosComponent},
    { path: 'servicio-edit/:id', component: ServicioComponent },
    { path: 'servicio-insert', component: ServicioComponent }
  ]},

  { path: '', component: InicioComponent, canActivate:[SitunaGuard]},

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
