import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import {CuentaService} from '../servicios/cuenta.service';

@Injectable({
  providedIn: 'root'
})
export class SitunaGuard implements CanActivate {

  constructor(private router: Router, private loginService: CuentaService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.loginService.isLogged == false) {
        this.router.navigate(['/login']);
        //alert("No estás logueado"); //Mostrar Notificacion aquí
        return false;
      }
      return true;
  }
  
}
