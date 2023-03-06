import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicio/usuarios.service';
import { Usuarios } from 'src/app/models/usuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  error = true;

  UsuariosForm = new FormGroup({
    photo: new FormControl('', Validators.required),

    name: new FormControl('', Validators.required),

    lastname: new FormControl('', Validators.required),

    password: new FormControl('', Validators.required),

    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),

    phone: new FormControl('', Validators.required),

    dni: new FormControl('', Validators.required)
  });

  constructor(private usuarios: UsuariosService, public router: Router) { }

  ngOnInit(): void {
  }

  addUsuario(): void {
    let photo = this.UsuariosForm.controls.photo.value!;
    let name = this.UsuariosForm.controls.name.value!;
    let lastname = this.UsuariosForm.controls.lastname.value!;
    let password = this.UsuariosForm.controls.password.value!;
    let email = this.UsuariosForm.controls.email.value!;
    let phone = parseInt(this.UsuariosForm.controls.phone.value!);
    let dni = this.UsuariosForm.controls.dni.value!;



    const cliente: Usuarios = {
      "photo": photo,
      "name": name,
      "lastname": lastname,
      "password": password,
      "email": email,
      "phone": phone,
      "dni": dni
    };

    console.log(cliente);

    this.usuarios.addUsuarios(cliente).subscribe({
      next: (value: Usuarios) => {
        console.log(value);

        this.router.navigate(['']);
      }
    });
    this.UsuariosForm.reset();
  }

}
