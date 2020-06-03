import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-servicios',
  templateUrl: './home-servicios.component.html',
  styleUrls: ['./home-servicios.component.css']
})
export class HomeServiciosComponent implements OnInit {

  constructor(private router: Router) { 
    this.router.navigate(['/servicios/lista']);
  }

  ngOnInit(): void {
  }

}
