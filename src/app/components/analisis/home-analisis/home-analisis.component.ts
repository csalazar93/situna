import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-analisis',
  templateUrl: './home-analisis.component.html',
  styleUrls: ['./home-analisis.component.css']
})
export class HomeAnalisisComponent implements OnInit {

  constructor(private router: Router) { 
    this.router.navigate(['/analisis/dashboard']);
  }

  ngOnInit(): void {
  }

}
