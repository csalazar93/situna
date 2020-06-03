import { Component } from '@angular/core';

import {OnInit} from '@angular/core'

import {Usuario} from './modelos/usuario';
import { CuentaService } from './servicios/cuenta.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyectoweb';
  usuario:Usuario;

  constructor(private cuentaService:CuentaService){//para validar si está conectado o no
    //this.router.navigate(["/mantenimiento-noticias/lista"]);
    this.cuentaService.getUsuario$().subscribe(x => this.usuario = x);
  }

}
