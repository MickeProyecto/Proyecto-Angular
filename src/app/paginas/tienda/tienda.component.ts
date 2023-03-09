import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/paginas/servicio/usuarios.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  isLoggedin = true;
  role: string = 'cliente';
  info: any;

  constructor(public router: Router, public servicio: UsuariosService) { }

  ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.info = JSON.parse(currentUser);
      console.log(this.info);
    }
    if (this.info == null) {
      this.isLoggedin = true;
    } else if (this.info != null) {
      this.isLoggedin = false;
    }
    if (this.info.rol == 'admin') {
      this.role = 'admin';
    } else {
      this.role = 'cliente';
    }
  }
}
