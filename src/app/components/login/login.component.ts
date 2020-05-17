import { Component, OnInit } from '@angular/core';

import { CuentaService } from '../../servicios/cuenta.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder
    , private cuentaService: CuentaService
    , private router: Router
    , private route: ActivatedRoute) {
    // redirect to home if already logged in
    /*if (this.cuentaService.getUsuario$().currentUserValue) { 
        this.router.navigate(['/']);
    }*/
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // Manera sencilla de obtener acceso a lps controles del formulario
  get f() { return this.loginForm.controls; }

  login() {
    this.cuentaService.login();
    this.router.navigate([this.returnUrl]);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.login();
  }

}
