import { Component, OnInit } from '@angular/core';

//Import jquery
import * as $ from 'jquery';
import { CuentaService } from 'src/app/servicios/cuenta.service';

declare function OpenAtractivos();

declare function OpenPlanta();

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {

  constructor(private cuentaService: CuentaService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      
      $("#menuPrincipal a:not(.dropdown-toggle)").click(function () {
        $(".navbar-toggler").addClass("collapsed");
        $("#navbarSupportedContent").removeClass("show", 250);
      });

      $("#btnAtractivo").click(function () {
        OpenAtractivos();
      });

      $("#btnPlanta").click(function () {
        OpenPlanta();
      });
    });
  }

  logout() {
    this.cuentaService.logout();
  }

}
