import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/paginas/servicio/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-BorrarProducto',
  templateUrl: './BorrarProducto.component.html',
  styleUrls: ['./BorrarProducto.component.css']
})
export class BorrarProductoComponent {

  httpOptions: any;

  policial: any;

  constructor(
    public dialogRef: MatDialogRef<BorrarProductoComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public usuarios: UsuariosService,
    private _http: HttpClient,
    public router: Router
  ) {

    console.log('constructor');

  }

  onHomeClick() {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser') || '').access_token}`
      })
    };

    let id = this.usuarios.getIdProducto();

    console.log(id);

    this._http.delete(`${this.usuarios.URL}deletem/${id}`, this.httpOptions).subscribe(() => {

      this.dialogRef.close('home');

    });

  }

  MensajeCorrecto() {
    Swal.fire(
      'Producto eliminado!',
      'El producto a sido eliminado correctamente!',
      'success'
    );
  }


  onBackClick(): void {

    this.dialogRef.close('back');

  }
}