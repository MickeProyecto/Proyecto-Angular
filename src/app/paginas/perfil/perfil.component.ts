import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicio/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public usuarios: UsuariosService, public router: Router) { }

  // info = [{
  //   "name": this.usuarios.datosusuario.name,
  //   "email": this.usuarios.datosusuario.email,
  //   "password": this.usuarios.datosusuario.password,
  //   "lastname": this.usuarios.datosusuario.lastname,
  //   "rol": this.usuarios.datosusuario.role
  // }];

  ngOnInit(): void {
    // console.log(this.info);
  }

  // logout() {
  //   console.log(this.info);
  //   this.info.splice(0, this.info.length);
  //   this.router.navigate(['']);
  // }

}
