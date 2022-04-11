import { Injectable } from '@angular/core';

/*Implementaciòn de la API*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtractivoService {

   /*URL base de la API*/
   private baseURL = 'http://localhost:8000/'

   /*Header, para traer el dato en JSON*/
   httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

   /*Definir la funcion que se utiliza en la API*/
   private apiOperation: string = '';

   constructor(private http: HttpClient) { }

  /*Obtener el listado de fichas de tipo atractivo registradas en BD*/
  getAllFichasPlanta():Observable<any>{
    this.apiOperation = "getallfichasatractivo/";

    var url = this.baseURL + this.apiOperation;

    return this.http.get(url, {headers: this.httpHeaders});
  }
}
