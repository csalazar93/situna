import { Component, OnInit } from '@angular/core';

//Acceder a funciones de un JS: https://fmoralesdev.com/2019/10/23/using-external-js-files-in-angular/
declare function obtenerLocalizacion();

@Component({
  selector: 'app-fichainventario',
  templateUrl: './fichainventario.component.html',
  styleUrls: ['./fichainventario.component.css']
})
export class FichainventarioComponent implements OnInit {

  constructor() { }
  ngOnInit() {

  }
  
  //Accesar a funciones de un JS: https://fmoralesdev.com/2019/10/23/using-external-js-files-in-angular/
  GetLocalizacion(){
    obtenerLocalizacion();
  }

}
