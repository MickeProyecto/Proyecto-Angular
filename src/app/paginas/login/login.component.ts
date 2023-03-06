import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login.model';
import { UsuariosService } from '../servicio/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any

  loginForm = new FormGroup({
    dni: new FormControl('', Validators.required),

    password: new FormControl('', Validators.required),
  });

  constructor(private usuarios: UsuariosService, public router: Router) { }

  ngOnInit(): void {

  }

  login(): void {
    let dni = this.loginForm.controls.dni.value!;
    let password = this.loginForm.controls.password.value!;

    const login: Login = {
      "dni": dni,
      "password": password
    }

    console.log(login);

    this.usuarios.login(login).subscribe({
      next: (value: Login) => {
        console.log(value)

        this.router.navigate(['']);
      }
    })

    this.loginForm.reset();
  }

}
