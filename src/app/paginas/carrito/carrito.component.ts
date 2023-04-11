import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicio/usuarios.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  [x: string]: any;

  httpOptions: any;

  productos: any[] = [];
  productosfiltrados: any[] = [];

  info: any;
  token: any;

  element = false;

  precio: any;

  constructor(public usuarios: UsuariosService, public router: Router, private _http: HttpClient) { }

  ngOnInit(): void {
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

    this._http.get(this.usuarios.URL + 'indexca', this.httpOptions).subscribe((data: any) => {
      this.productos = data;
      this.productosfiltrados = this.productos.filter(productos => productos.id_user === this.info.id);

      if (this.productosfiltrados.length == 0) {
        this.element = true;
      } else {
        this.element = false;
      }
    });


  }

  logout() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser') || '').access_token}`
      })
    };

    this._http.get(this.usuarios.URL + 'logout', this.httpOptions).subscribe(() => {
      // Borrar el token de autenticación del usuario actual
      localStorage.removeItem('currentUser');
      // Redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['']);
    })

  }

  Pedido() {

    console.log(this.productosfiltrados);

    this.usuarios.getPrecio

    this.productosfiltrados.forEach(
      (producto) => {
        console.log(`${producto.id} - ${producto.precio}`);

        this.usuarios.setPedidos(producto.id_producto, producto.precio);
      }
    );

    this.router.navigate(['../confirmarCompra']);

  }

}
