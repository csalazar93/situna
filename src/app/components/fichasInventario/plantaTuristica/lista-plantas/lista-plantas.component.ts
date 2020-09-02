import { Component, OnInit } from '@angular/core';


//Import jquery
/*import * as $ from 'jquery';

declare function OpenPlanta();*/

@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css']
})
export class ListaPlantasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*$(document).ready(function () {
      
      $("#menuPrincipal a:not(.dropdown-toggle)").click(function () {
        $(".navbar-toggler").addClass("collapsed");
        $("#navbarSupportedContent").removeClass("show", 250);
      });

      $("#btnPlanta").click(function () {
        OpenPlanta();
      });
    });*/
  }

}
