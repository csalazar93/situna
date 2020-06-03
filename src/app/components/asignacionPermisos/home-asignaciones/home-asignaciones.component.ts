import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-asignaciones',
  templateUrl: './home-asignaciones.component.html',
  styleUrls: ['./home-asignaciones.component.css']
})
export class HomeAsignacionesComponent implements OnInit {

  constructor(private router: Router) { 
    this.router.navigate(['/asignaciones/lista']);
  }

  ngOnInit(): void {
  }

}
