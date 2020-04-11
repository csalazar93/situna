import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';//Esto se agrega para poder usar el router-outlet
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FichainventarioComponent } from './components/fichainventario/fichainventario.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FichainventarioComponent,
    AnalisisComponent
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
