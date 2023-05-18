import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/paginas/servicio/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-borrarpuntos',
  templateUrl: './BorrarPuntosEntregaComponent.component.html',
  styleUrls: ['./BorrarPuntosEntregaComponent.component.css']
})
export class BorrarPuntosEntregaComponent {

  httpOptions: any;

  policial: any;

  constructor(
    public dialogRef: MatDialogRef<BorrarPuntosEntregaComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public usuarios: UsuariosService,
    private _http: HttpClient,
    public router: Router
  ) {

    console.log('constructor');

  }

  ngOnInit(): void {
    document.title = "Borrar Puntos de Entrega - Niké's Arsenal"
  }

  onHomeClick() {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser') || '').access_token}`
      })
    };

    let id = this.usuarios.getIdPuntoEntrega();

    console.log(id);

    this._http.delete(`${this.usuarios.URL}deletepu/${id}`, this.httpOptions).subscribe(() => {

      this.dialogRef.close('home');

    });

  }

  MensajeCorrecto() {
    Swal.fire(
      'Punto de entrega eliminado!',
      'El punto de entrega a sido eliminado correctamente!',
      'success'
    );
  }


  onBackClick(): void {

    this.dialogRef.close('back');

  }
}