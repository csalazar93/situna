import { Component, OnInit } from '@angular/core';

//Import jquery
import * as $ from 'jquery';

declare function OpenAtractivos();

@Component({
  selector: 'app-lista-atractivos',
  templateUrl: './lista-atractivos.component.html',
  styleUrls: ['./lista-atractivos.component.css']
})
export class ListaAtractivosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      
      $("#menuPrincipal a:not(.dropdown-toggle)").click(function () {
        $(".navbar-toggler").addClass("collapsed");
        $("#navbarSupportedContent").removeClass("show", 250);
      });

      $("#btnAtractivo").click(function () {
        OpenAtractivos();
      });
    });
  }

}
