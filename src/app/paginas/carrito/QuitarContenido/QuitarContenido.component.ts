import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/paginas/servicio/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-quitarcontenido',
  templateUrl: './QuitarContenido.component.html',
  styleUrls: ['./QuitarContenido.component.css']
})
export class QuitarProductoComponent {

  httpOptions: any;

  policial: any;

  id: any;

  constructor(
    public dialogRef: MatDialogRef<QuitarProductoComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public usuarios: UsuariosService,
    private _http: HttpClient,
    public router: Router
  ) {

    console.log('constructor');

  }

  ngOnInit(): void {

    document.title = "Quitar Producto - Niké's Arsenal"

  }

  onHomeClick() {

    this.id = this.usuarios.getIdCarrito();


    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser') || '').access_token}`
      })
    };

    let id = this.usuarios.getIdCarrito();

    console.log(id);

    this._http.delete(`${this.usuarios.URL}deleteca/${id}`, this.httpOptions).subscribe(() => {

      this.dialogRef.close('home');

    });

  }

  MensajeCorrecto() {
    Swal.fire(
      'Producto Quitado!',
      'El producto a sido quitado del carrito!',
      'success'
    );
  }


  onBackClick(): void {

    this.dialogRef.close('back');

  }
}