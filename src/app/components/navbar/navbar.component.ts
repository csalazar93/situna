import { Component, OnInit } from '@angular/core';

declare var $:any;//Declaro esto para usar las funciones que haya hecho con Jquery
//Asi se usa JQuery con angular
//https://blog.bitsrc.io/how-to-use-jquery-with-angular-when-you-absolutely-have-to-42c8b6a37ff9

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }
  
}
