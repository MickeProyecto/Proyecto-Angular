import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicio/usuarios.service';
import { Pedidos } from 'src/app/models/pedidos.model';

@Component({
  selector: 'app-Verpedidos',
  templateUrl: './Verpedidos.component.html',
  styleUrls: ['./Verpedidos.component.css']
})
export class VerPedidosComponent implements OnInit {

  httpOptions: any;
  info: any;
  token: any;
  pedidos: any[] = [];
  nombreproducto: any[] = [];
  nombreusuario: any[] = [];
  nombretienda: any[] = [];

  element = false;

  constructor(public usuarios: UsuariosService, public router: Router, private _http: HttpClient) { }

  ngOnInit(): void {

    document.title = "Ver Pedidos - Niké's Arsenal"

    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.info = JSON.parse(currentUser).value;
      this.token = JSON.parse(currentUser).access_token;
      console.log(this.info);
      console.log(this.token);
    }

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser') || '').access_token}`
      })
    };

    if (this.info.rol == "cliente") {
      this._http.get(this.usuarios.URL + `indexo/${this.info.id}`, this.httpOptions).subscribe((data: any) => {
        this.pedidos = data;

        console.log(this.pedidos);

        if (this.pedidos.length == 0) {
          this.element = true;
        } else {
          this.element = false;
        }

        for (let material of this.pedidos) {
          this._http.get(this.usuarios.URL + `indexnombreproducto/${material.id_material}`, this.httpOptions).subscribe((data: any) => {
            this.nombreproducto = data;
            console.log(this.nombreproducto);
          });
        }

        for (let tienda of this.pedidos) {
          this._http.get(this.usuarios.URL + `indexnombretienda/${tienda.id_punto_entrega}`, this.httpOptions).subscribe((data: any) => {
            this.nombretienda = data;
            console.log(this.nombretienda);
          });
        }
      });
    } else if (this.info.rol == "admin") {
      this._http.get(this.usuarios.URL + 'index', this.httpOptions).subscribe((data: any) => {
        this.pedidos = data;
        console.log(this.pedidos);
        if (this.pedidos.length == 0) {
          this.element = true;
        } else {
          this.element = false;
        }

        for (let cliente of this.pedidos) {
          this._http.get(this.usuarios.URL + `indexnombrecleinte/${cliente.id_usuario}`, this.httpOptions).subscribe((data: any) => {
            this.nombreusuario = data;
            console.log(this.nombreusuario);
          });
        }

        for (let material of this.pedidos) {
          this._http.get(this.usuarios.URL + `indexnombreproducto/${material.id_material}`, this.httpOptions).subscribe((data: any) => {
            this.nombreproducto = data;
            console.log(this.nombreproducto);
          });
        }

        for (let tienda of this.pedidos) {
          this._http.get(this.usuarios.URL + `indexnombretienda/${tienda.id_punto_entrega}`, this.httpOptions).subscribe((data: any) => {
            this.nombretienda = data;
            console.log(this.nombretienda);
          });
        }

      });
    }


  }

  confirmarEstado(estado: any, id: any) {
    console.log(estado.value);

    const updateestado = {
      "id": id,
      "estado": estado.value
    }

    this._http.put(this.usuarios.URL + 'updateestado', updateestado, this.httpOptions).subscribe((data: any) => {
      console.log(data);
    });

  }
}
