import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-reportes',
  templateUrl: './home-reportes.component.html',
  styleUrls: ['./home-reportes.component.css']
})
export class HomeReportesComponent implements OnInit {

  constructor(private router: Router) { 
    this.router.navigate(['/reporteria/lista']);
  }

  ngOnInit(): void {
  }

}
