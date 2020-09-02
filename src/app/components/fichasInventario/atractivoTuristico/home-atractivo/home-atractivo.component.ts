import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Import jquery
import * as $ from 'jquery';

declare function OpenAtractivos();

@Component({
  selector: 'app-home-atractivo',
  templateUrl: './home-atractivo.component.html',
  styleUrls: ['./home-atractivo.component.css']
})
export class HomeAtractivoComponent implements OnInit {

  constructor(private router: Router) { 
    this.router.navigate(['/fichas/crud-atractivo/lista']);
  }

  ngOnInit(): void {
    $(document).ready(function () {
      
      $("#menuPrincipal a:not(.dropdown-toggle)").click(function () {
        $(".navbar-toggler").addClass("collapsed");
        $("#navbarSupportedContent").removeClass("show", 250);
      });

      $("#btnInsertAtractivo").click(function () {
        OpenAtractivos();
      });
    });
  }

}
