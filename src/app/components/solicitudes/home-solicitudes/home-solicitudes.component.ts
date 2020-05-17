import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-solicitudes',
  templateUrl: './home-solicitudes.component.html',
  styleUrls: ['./home-solicitudes.component.css']
})
export class HomeSolicitudesComponent implements OnInit {

  constructor(private router: Router) { 
    this.router.navigate(['/solicitudes/lista']);
  }

  ngOnInit(): void {
  }

}
