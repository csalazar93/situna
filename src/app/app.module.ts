import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';//Esto se agrega para poder usar el router-outlet
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FichainventarioComponent } from './components/fichainventario/fichainventario.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { PlantaComponent } from './components/planta/planta.component';
import { AtractivoComponent } from './components/atractivo/atractivo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FichainventarioComponent,
    AnalisisComponent,
    PlantaComponent,
    AtractivoComponent
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
