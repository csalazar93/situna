import { Injectable } from '@angular/core';

/*Implementaciòn de la API*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  /*URL base de la API*/
  private baseURL = 'http://localhost:8000/'
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  /*Definir la funcion que se utiliza en la API*/
  private apiOperation: string = '';

  /*Declarar el acceso al protocolo http en el constructor*/
  constructor(private http: HttpClient) { }

  /*Obtener provincias*/
  getProvinciasList():Observable<any>{
    this.apiOperation = 'getprovincias/'
    
    var url = this.baseURL + this.apiOperation;
    //console.log(url);

    return this.http.get(url, {headers: this.httpHeaders});
  }

  /*Obtener provincias*/
  getCantonesProvinciaList(provincia:number):Observable<any>{
    this.apiOperation = 'getcantones/' + provincia + '/'
    
    var url = this.baseURL + this.apiOperation;
    //console.log(url);

    return this.http.get(url, {headers: this.httpHeaders});
  }

  /*Obtener distritos*/
  getDistritosCantonList(canton:number):Observable<any>{
    this.apiOperation = 'getdistritos/' + canton + '/'
    
    var url = this.baseURL + this.apiOperation;
    //console.log(url);

    return this.http.get(url, {headers: this.httpHeaders});
  }


}
