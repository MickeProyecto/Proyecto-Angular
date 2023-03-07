import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { Usuarios } from 'src/app/models/usuarios.model';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    readonly URL = 'http://127.0.0.1:8000/api/';

    constructor(private _http: HttpClient) { }

    datosusuario: any;
    found = false;

    addUsuarios(usuario: Usuarios) {
        return this._http.post(this.URL + "signup", usuario)
            .pipe(filter((response: any) => {
                if (response != null) {
                    this.found = true;
                } else {
                    this.found = false;
                }
                this.datosusuario = response;
                return this.found;
            }
            ));
    }

    login(login: Login) {
        return this._http.post(this.URL + "login", login)
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
}