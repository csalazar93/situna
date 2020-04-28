import { Component, OnInit } from '@angular/core';

//Import jquery
import * as $ from 'jquery';

declare function PruebaJQ();

@Component({
  selector: 'app-atractivo',
  templateUrl: './atractivo.component.html',
  styleUrls: ['./atractivo.component.css']
})
export class AtractivoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $(".btnSection").click(function () {
        PruebaJQ();
      });
    });
  }


}
