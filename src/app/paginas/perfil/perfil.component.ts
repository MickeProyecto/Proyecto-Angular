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

  info: any

  ngOnInit(): void {
    this.info = JSON.parse(localStorage.getItem('currentUser') ?? '');
    console.log(this.info);
  }



  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

}
