import { Injectable } from '@angular/core';

import {Router} from '@angular/router';
import {Observable, Subject, Subscription} from 'rxjs';

import {Usuario} from '../modelos/usuario';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private usuario$ = new Subject<Usuario>();
  public isLogged:boolean;

  constructor(private ruta: Router) {
    this.isLogged = false;

   }

   //Insertar el usuario en el subject, como no es un array no le hagp push
   setUsuario(usuario:Usuario){
     this.usuario$.next(usuario);
   }

   getUsuario$():Observable<Usuario>{
     return this.usuario$.asObservable();
   }

   login(){
     this.isLogged = true;
     let user:Usuario = {
       nombre:'Cristhian',
       cedula:'115360166',
       pApellido:'Salazar',
       sApellido:'Ureña',
       rol:1,
       password:'123456'
     }

     this.setUsuario(user);
   }

   logout(){
     this.isLogged = false;

     this.setUsuario(null);

     this.ruta.navigate(['/login']);//Ir al login
   }

   getLogin(){
     return this.isLogged;
   }
}
