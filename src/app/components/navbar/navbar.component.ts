import { Component, OnInit } from '@angular/core';

declare var $:any;
//Asi se usa JQuery con angular
//https://blog.bitsrc.io/how-to-use-jquery-with-angular-when-you-absolutely-have-to-42c8b6a37ff9

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {

  navbarOpen = false;//Definir el estado del boton que despliega las opciones del menu

  toggleNavbar() {//Cambiar el estado del toogle que me muestra el menu desplegable
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() { 
  }

  ngOnInit() {
    //esta es una manera de agregar JQuery en angular, ver si se puede agregar como archivo externo
    // Ver esta manera mañana https://www.truecodex.com/course/angular-6/how-to-use-external-js-files-and-javascript-code-in-angular
    $(document).ready(function(){
      $("#menuPrincipal a").click(function(){
        //$(".navbar-toggler").addClass("collapsed");
        $("#navbarSupportedContent-333").removeClass("show", 250);
      });
    })
  }

  

}
