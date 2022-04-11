import { Injectable } from '@angular/core';

/*Implementaciòn de la API*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  /*URL base de la API*/
  private baseURL = 'http://localhost:8000/'
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  /*Definir la funcion que se utiliza en la API*/
  private apiOperation: string = '';

  /*Declarar el acceso al protocolo http en el constructor*/
  constructor(private http: HttpClient) { }

  /*Get all PlantaServicios*/
  getPlantaServiciosList():Observable<any>{
    this.apiOperation = 'getplaservicios/';
    
    var url = this.baseURL + this.apiOperation;
    //console.log(url);

    return this.http.get(url, {headers: this.httpHeaders});
  }

  /*Obtener el listado de fichas de tipo planta registradas en BD*/
  getAllFichasPlanta():Observable<any>{
    this.apiOperation = "getallfichasplanta/";

    var url = this.baseURL + this.apiOperation;

    return this.http.get(url, {headers: this.httpHeaders});
  }

}
