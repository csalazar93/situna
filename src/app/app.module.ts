import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';//Para poder usar el ngModel
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//Animaciones en angular
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';//Esto se agrega para poder usar el router-outlet
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';

import {PlantaComponent} from './components/fichasInventario/plantaTuristica/planta/planta.component';
import {ListaPlantasComponent} from './components/fichasInventario/plantaTuristica/lista-plantas/lista-plantas.component';
import {HomePlantaComponent} from './components/fichasInventario/plantaTuristica/home-planta/home-planta.component';

import {AtractivoComponent} from './components/fichasInventario/atractivoTuristico/atractivo/atractivo.component';
import {ListaAtractivosComponent} from './components/fichasInventario/atractivoTuristico/lista-atractivos/lista-atractivos.component';
import {HomeAtractivoComponent} from './components/fichasInventario/atractivoTuristico/home-atractivo/home-atractivo.component';

import { LoginComponent } from './components/login/login.component';

import { HomeReportesComponent } from './components/reportes/home-reportes/home-reportes.component';
import { ListaReportesComponent } from './components/reportes/lista-reportes/lista-reportes.component';

import { HomeAnalisisComponent } from './components/analisis/home-analisis/home-analisis.component';
import { DashboardComponent } from './components/analisis/dashboard/dashboard.component';

import { HomeSolicitudesComponent } from './components/solicitudes/home-solicitudes/home-solicitudes.component';
import { ListaSolicitudesComponent } from './components/solicitudes/lista-solicitudes/lista-solicitudes.component';
import { SolicitudComponent } from './components/solicitudes/solicitud/solicitud.component';

import { HomeUsuariosComponent } from './components/usuarios/home-usuarios/home-usuarios.component';
import { ListaUsuariosComponent } from './components/usuarios/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';

import { HomeRolesComponent } from './components/roles/home-roles/home-roles.component';
import { ListaRolesComponent } from './components/roles/lista-roles/lista-roles.component';
import { RolComponent } from './components/roles/rol/rol.component';

import { HomeAsignacionesComponent } from './components/asignacionPermisos/home-asignaciones/home-asignaciones.component';
import { ListaAsignacionesComponent } from './components/asignacionPermisos/lista-asignaciones/lista-asignaciones.component';
import { AsignarPermisosComponent } from './components/asignacionPermisos/asignar-permisos/asignar-permisos.component';

import { HomeServiciosComponent } from './components/serviciosC/home-servicios/home-servicios.component';
import { ListaServiciosComponent } from './components/serviciosC/lista-servicios/lista-servicios.component';
import { ServicioComponent } from './components/serviciosC/servicio/servicio.component';
import { CuentaService } from './servicios/cuenta.service';
import { SitunaGuard } from './guards/situna.guard';
import { HomeFichasComponent } from './components/fichasInventario/home-fichas/home-fichas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    HomePlantaComponent,
    ListaPlantasComponent,
    PlantaComponent,
    HomeAtractivoComponent,
    ListaAtractivosComponent,
    AtractivoComponent,
    HomeReportesComponent,
    ListaReportesComponent,
    HomeAnalisisComponent,
    DashboardComponent,
    HomeSolicitudesComponent,
    ListaSolicitudesComponent,
    SolicitudComponent,
    HomeUsuariosComponent,
    ListaUsuariosComponent,
    UsuarioComponent,
    HomeRolesComponent,
    ListaRolesComponent,
    RolComponent,
    HomeAsignacionesComponent,
    ListaAsignacionesComponent,
    AsignarPermisosComponent,
    HomeServiciosComponent,
    ListaServiciosComponent,
    ServicioComponent,
    LoginComponent,
    HomeFichasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgbModule
  ],
  providers: [CuentaService, SitunaGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
