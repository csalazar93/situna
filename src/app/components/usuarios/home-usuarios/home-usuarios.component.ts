import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-usuarios',
  templateUrl: './home-usuarios.component.html',
  styleUrls: ['./home-usuarios.component.css']
})
export class HomeUsuariosComponent implements OnInit {

  constructor(private router: Router) { 
    this.router.navigate(['/usuarios/lista']);
  }

  ngOnInit(): void {
  }

}
