import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicio/usuarios.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from './logout/LogoutComponent.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  httpOptions: any;

  constructor(public usuarios: UsuariosService,
    public router: Router,
    private _http: HttpClient,
    public dialog: MatDialog,
  ) { }

  info: any;
  token: any;

  UsuarioArray: any[] = [];

  ngOnInit(): void {

    document.title = "Perfil - Niké's Arsenal"

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

    this._http.get(this.usuarios.URL + `indexespecifico/${this.info.id}`, this.httpOptions).subscribe((data: any) => {
      this.UsuarioArray = data;
    });
  }

  logout() {

    let dialogRef = this.dialog.open(LogoutComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'home') {
        localStorage.removeItem('currentUser');
        this.info = null;
        console.log(this.info);
        this.router.navigate(['']);
      }
    });
  }

}
