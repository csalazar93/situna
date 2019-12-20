import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';//Esto se agrega para poder usar el router-outlet
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { PlantaComponent } from './components/planta/planta.component';
import { AtractivoComponent } from './components/atractivo/atractivo.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { RolesComponent } from './components/roles/roles.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AcercadeComponent,
    PlantaComponent,
    AtractivoComponent,
    ReportesComponent,
    AnalisisComponent,
    RolesComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
