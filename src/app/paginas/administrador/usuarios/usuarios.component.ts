import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../servicio/usuarios.service';
import { Usuarios } from 'src/app/models/usuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  error = true;
  foto: any;
  UsuariosForm!: FormGroup;

  constructor(private usuarios: UsuariosService, public router: Router) { }

  ngOnInit(): void {

    this.UsuariosForm = new FormGroup({
      photo: new FormControl('', Validators.required),

      name: new FormControl('', Validators.required),

      lastname: new FormControl('', Validators.required),

      password: new FormControl('', Validators.required),

      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),

      phone: new FormControl('', Validators.required),

      dni: new FormControl('', Validators.required)
    });

  }

  get f() {
    return this.UsuariosForm.controls;
  }

  onFileChange(event: any) {
    this.foto = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(this.foto);
    reader.onload = (event: any) => {
      this.foto = reader.result;
      console.log(this.foto);
    }
  }

  addUsuario(): void {

    const cliente: Usuarios = {
      "photo": this.foto,
      "name": this.UsuariosForm.value.name,
      "lastname": this.UsuariosForm.value.lastname,
      "password": this.UsuariosForm.value.password,
      "email": this.UsuariosForm.value.email,
      "phone": parseInt(this.UsuariosForm.value.phone),
      "dni": this.UsuariosForm.value.dni
    };

    console.log(cliente);

    this.usuarios.addUsuarios(cliente).subscribe({
      next: (value: Usuarios) => {
        console.log(value);

        this.router.navigate(['../tienda']);
      }
    });
    this.UsuariosForm.reset();
  }

}
