import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  }

}
