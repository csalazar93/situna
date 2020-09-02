import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  submitted = false;

  constructor(private router: Router) { }

  tituloFormulario: string = "Datos de Rol/Perfil"

  ngOnInit(): void {
  }

  returnRoleList() {
    this.router.navigate(["/roles/lista"]);
  }

  onSubmit() {
    this.submitted = true;

    this.returnRoleList();
  }

}
