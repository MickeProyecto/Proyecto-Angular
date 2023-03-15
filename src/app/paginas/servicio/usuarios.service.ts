import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { filter, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Login } from 'src/app/models/login.model';
import { Usuarios } from 'src/app/models/usuarios.model';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    readonly URL = "http://127.0.0.1:8000/api/";

    httpOptions: any;

    constructor(private _http: HttpClient) { }

    datosusuario: any;
    found = false;

    addUsuarios(usuarios: Usuarios) {
        return this._http.post(this.URL + "signup", usuarios)
            .pipe(
                filter((response: any) => {
                    if (response != null) {
                        this.found = true;
                    }
                    else {
                        this.found = false;
                    }
                    this.datosusuario = response;
                    return this.datosusuario;
                }
                ));
    }

    login(login: Login) {
        return this._http.post(this.URL + "login", login)
            .pipe(
                filter((response: any) => {
                    if (response != null) {
                        this.found = true;
                    } else {
                        this.found = false;
                    }
                    this.datosusuario = response;

                    localStorage.setItem('currentUser', JSON.stringify(this.datosusuario));

                    this.httpOptions = {
                        headers: new HttpHeaders({
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser') || '').access_token}`
                        })
                    };

                    return this.datosusuario;
                }
                ));
    }
}
