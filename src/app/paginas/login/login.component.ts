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
  [x: string]: any;

  error = false;

  // Creacion del FromGroup "loginForm" y comprobando si los campos estan vacios o no.
  loginForm = new FormGroup({
    dni: new FormControl('', Validators.required),

    password: new FormControl('', Validators.required),
  });

  // Contructor donde ponemos la infomracion del service en la variable usuarios 
  // y la información del Router en la variable router.
  constructor(private usuarios: UsuariosService, public router: Router) { }

  ngOnInit(): void {
  }
  // Funcion que se ejecutara una vez se haya hecho clic en el boton de login con los campos llenos.
  login(): void {
    // Insertamos la información del Formgroup en unas nuevas variables.
    let dni = this.loginForm.controls.dni.value!;
    let password = this.loginForm.controls.password.value!;

    // Insertamos la información de las variables anteriores en las variables del modelo "Login".
    const login: Login = {
      "dni": dni,
      "password": password
    };

    // Comando para comprobar que la información se guarda en el modelo.
    console.log(login);

    //Linea de comandos para enviar la información a la funciond el service.
    this.usuarios.login(login).subscribe({
      next: (value: Login) => {
        console.log(value)
        // Comando para ir a la paguina de perfiles.

        if (this.usuarios.datosusuario == "Username_bad" || this.usuarios.datosusuario == "Password_bad") {
          this.error = true;
        } else {
          this.router.navigate(['tienda']);
        }
      }
    })
    // Comando para borrar el contenido de los inputs del formulario.
    this.loginForm.reset();
  }

}
