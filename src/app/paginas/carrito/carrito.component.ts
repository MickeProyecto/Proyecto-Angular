import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicio/usuarios.service';
import { QuitarProductoComponent } from './QuitarContenido/QuitarContenido.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  [x: string]: any;

  productos: any[] = [];
  productosfiltrados: any[] = [];

  httpOptions: any;
  info: any;
  token: any;
  precio: any;

  element = false;

  materialsnameimg: any[] = [];

  constructor(public usuarios: UsuariosService,
    public router: Router,
    private _http: HttpClient,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    document.title = "Carrito - Niké's Arsenal"

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

        for (let dato of this.productosfiltrados) {

          this.usuarios.setIdCarrito(dato.id)

          let id = dato.id_material

          this._http.get(this.usuarios.URL + `namematerial/${id}`, this.httpOptions).subscribe((data: any) => {

            this.materialsnameimg = data;

            console.log(this.materialsnameimg)

          });

        }
      }
    });


  }

  Pedido() {

    let pedidos: any[] = [];

    this.productosfiltrados.forEach(
      (producto) => {

        let pedido = {
          id: producto.id_material,
          precio: producto.precio
        };

        console.log(`${producto.id_material} - ${producto.precio}`);

        pedidos.push(pedido);

      }
    );

    this.usuarios.setPedidos(pedidos);

    this.router.navigate(['../confirmarCompra']);

  }

  openQuitarProducto(event: any, idCarrito: any) {

    this.usuarios.setIdCarrito(idCarrito);

    let dialogRef = this.dialog.open(QuitarProductoComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'home') {

        this.router.navigate(['/carrito']);
      }
    });
  }

}
