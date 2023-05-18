import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/paginas/servicio/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-borrarcategoria',
  templateUrl: './BorrarcategoriaComponent.component.html',
  styleUrls: ['./BorrarcategoriaComponent.component.css']
})
export class BorrarcategoriaComponent {

  httpOptions: any;

  policial: any;

  constructor(
    public dialogRef: MatDialogRef<BorrarcategoriaComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public usuarios: UsuariosService,
    private _http: HttpClient,
    public router: Router
  ) {

    console.log('constructor');

  }

  ngOnInit() {

    document.title = "Borrar categoria - Niké's Arsenal"
  }

  onHomeClick() {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser') || '').access_token}`
      })
    };

    let id = this.usuarios.getIdCategoria();

    console.log(id);

    this._http.delete(`${this.usuarios.URL}deletec/${id}`, this.httpOptions).subscribe(() => {

      this.dialogRef.close('home');

    });

  }

  MensajeCorrecto() {
    Swal.fire(
      'Categoria eliminado!',
      'La categoria a sido eliminado correctamente!',
      'success'
    );
  }


  onBackClick(): void {

    this.dialogRef.close('back');

  }
}