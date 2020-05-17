import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  }

}
