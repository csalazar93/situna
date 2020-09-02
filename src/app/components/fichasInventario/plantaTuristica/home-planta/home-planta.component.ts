import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Import jquery
import * as $ from 'jquery';

declare function OpenPlanta();

@Component({
  selector: 'app-home-planta',
  templateUrl: './home-planta.component.html',
  styleUrls: ['./home-planta.component.css']
})
export class HomePlantaComponent implements OnInit {

  constructor(private router: Router) { 
    this.router.navigate(['/fichas/crud-planta/lista']);
  }

  ngOnInit(): void {
    $(document).ready(function () {
      
      $("#menuPrincipal a:not(.dropdown-toggle)").click(function () {
        $(".navbar-toggler").addClass("collapsed");
        $("#navbarSupportedContent").removeClass("show", 250);
      });

      $("#btnInsertPlanta").click(function () {
        OpenPlanta();
      });
    });
  }

}
