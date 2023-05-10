import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuariosService } from 'src/app/paginas/servicio/usuarios.service';
import Swal from 'sweetalert2'


@Component({
    selector: 'app-puntosentregaupdate',
    templateUrl: './PuntosEntregaUpdate.component.html',
    styleUrls: ['./PuntosEntregaUpdate.component.css']
})

export class PuntosEntregaUpdateComponent implements OnInit {

    httpOptions: any;

    foto: any;
    info: any;

    ChangeFoto!: FormGroup;
    ChangeTienda!: FormGroup;
    ChangeProvincia!: FormGroup;
    ChangeCP!: FormGroup;
    ChangeDireccion!: FormGroup;
    ChangeMapa!: FormGroup;
    ChangeStreeview!: FormGroup;
    ChangeEncargado!: FormGroup;

    UsuariosArray: any[] = [];

    element1 = false;
    element2 = false;
    element3 = false;
    element4 = false;
    element5 = false;
    element6 = false;
    element7 = false;
    element8 = false;

    private sub: any;

    id: number | undefined;

    constructor(private usuarios: UsuariosService,
        public router: Router,
        private route: ActivatedRoute,
        private _http: HttpClient) { }

    ngOnInit(): void {
        console.log('0');

        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser') || '').access_token}`
            })
        };

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            console.log('1');

            this._http.get(this.usuarios.URL + `indexpuex/${this.id}`, this.httpOptions).subscribe((data: any) => {
                console.log(data)
                this.UsuariosArray = data;
            });
        })

        this.ChangeFoto = new FormGroup({
            photo: new FormControl('', Validators.required),
        });

        this.ChangeTienda = new FormGroup({
            tienda: new FormControl('', Validators.required),
        });

        this.ChangeProvincia = new FormGroup({
            provincia: new FormControl('', Validators.required),
        });

        this.ChangeCP = new FormGroup({
            cp: new FormControl('', Validators.required),
        });

        this.ChangeDireccion = new FormGroup({
            direccion: new FormControl('', Validators.required),
        });

        this.ChangeMapa = new FormGroup({
            mapa: new FormControl('', Validators.required),
        });

        this.ChangeStreeview = new FormGroup({
            streeview: new FormControl('', Validators.required),
        });

        this.ChangeEncargado = new FormGroup({
            encargado: new FormControl('', Validators.required),
        });

    }

    get f() {
        return this.ChangeFoto.controls;
    }

    get t() {
        return this.ChangeTienda.controls;
    }

    get p() {
        return this.ChangeProvincia.controls;
    }

    get cd() {
        return this.ChangeCP.controls;

    }

    get d() {
        return this.ChangeDireccion.controls;
    }

    get m() {
        return this.ChangeMapa.controls;
    }

    get s() {
        return this.ChangeStreeview.controls;
    }

    get e() {
        return this.ChangeEncargado.controls;
    }

    onFileChange(event: any) {
        this.foto = event.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(this.foto);
        reader.onload = (event: any) => {
            this.foto = reader.result;

            console.log(this.foto);
        }
    }

    UpdateFoto(): void {

        let foto = this.foto;

        const changeFoto = {
            "foto": foto
        };

        console.log(changeFoto);

        this._http.put(this.usuarios.URL + `updatefoto/${this.id}`, changeFoto, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeFoto.reset();
    }

    UpdateTienda(): void {

        const changetienda = {
            "tienda": this.ChangeTienda.value.tienda
        };

        console.log(changetienda);

        this._http.put(this.usuarios.URL + `updatetienda/${this.id}`, changetienda, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeTienda.reset();
    }

    UpdateProvincia(): void {

        const changeprovincia = {
            "provincia": this.ChangeProvincia.value.provincia
        };

        console.log(changeprovincia);

        this._http.put(this.usuarios.URL + `updateprovincia/${this.id}`, changeprovincia, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeProvincia.reset();
    }

    UpdateCP(): void {

        const changecp = {
            "cp": Number(this.ChangeCP.value.cp)
        };

        console.log(changecp);

        this._http.put(this.usuarios.URL + `updatecp/${this.id}`, changecp, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeCP.reset();
    }

    UpdateDireccion(): void {

        const changedireccion = {
            "direccion": this.ChangeDireccion.value.direccion
        };

        console.log(changedireccion);

        this._http.put(this.usuarios.URL + `updatedireccion/${this.id}`, changedireccion, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeDireccion.reset();
    }

    UpdateMapa(): void {

        const changemapa = {
            "mapa": this.ChangeMapa.value.mapa
        };

        console.log(changemapa);

        this._http.put(this.usuarios.URL + `updatemapa/${this.id}`, changemapa, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeMapa.reset();
    }

    UpdateStreetview(): void {

        const changestreetview = {
            "streeview": this.ChangeStreeview.value.streeview
        };

        console.log(changestreetview);

        this._http.put(this.usuarios.URL + `updatestreeview/${this.id}`, changestreetview, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeStreeview.reset();
    }

    UpdateEncargado(): void {

        const changeencargado = {
            "encargado": this.ChangeEncargado.value.encargado
        };

        console.log(changeencargado);

        this._http.put(this.usuarios.URL + `updateencargado/${this.id}`, changeencargado, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeEncargado.reset();
    }

    MensajeCorrecto() {
        Swal.fire(
            'Usuario actualizado!',
            'El usuario se ha actualizado correctamente!',
            'success'
        );
    }

    showData1() {
        this.element1 = true;
    }

    hideData1() {
        this.foto = null;
        this.element1 = false;
    }


    showData2() {
        this.element2 = true;
    }

    hideData2() {
        this.element2 = false;
    }


    showData3() {
        this.element3 = true;
    }

    hideData3() {
        this.element3 = false;
    }


    showData4() {
        this.element4 = true;
    }

    hideData4() {
        this.element4 = false;
    }

    showData5() {
        this.element5 = true;
    }

    hideData5() {
        this.element5 = false;
    }

    showData6() {
        this.element6 = true;
    }

    hideData6() {
        this.element6 = false;
    }

    showData7() {
        this.element7 = true;
    }

    hideData7() {
        this.element7 = false;
    }

    showData8() {
        this.element8 = true;
    }

    hideData8() {
        this.element8 = false;
    }
}
