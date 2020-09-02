import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-roles',
  templateUrl: './home-roles.component.html',
  styleUrls: ['./home-roles.component.css']
})
export class HomeRolesComponent implements OnInit {

  constructor(private router: Router) { 
    this.router.navigate(['/roles/lista']);
  }

  ngOnInit(): void {
  }

}
