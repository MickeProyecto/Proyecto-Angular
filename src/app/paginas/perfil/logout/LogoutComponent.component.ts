import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/paginas/servicio/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './LogoutComponent.component.html',
  styleUrls: ['./LogoutComponent.component.css']
})
export class LogoutComponent {

  httpOptions: any;

  constructor(
    public dialogRef: MatDialogRef<LogoutComponent>,
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

    this._http.get(this.usuarios.URL + 'logout', this.httpOptions).subscribe(() => {
      // Borrar el token de autenticación del usuario actual
      localStorage.removeItem('currentUser');
      // Redirigir al usuario a la página de inicio de sesión
      this.dialogRef.close('home');
    });

  }

  onBackClick(): void {

    this.dialogRef.close('back');

  }
}