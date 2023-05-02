import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuariosService } from 'src/app/paginas/servicio/usuarios.service';
import Swal from 'sweetalert2'


@Component({
    selector: 'app-usuarios',
    templateUrl: './usuariosUpdate.component.html',
    styleUrls: ['./usuariosUpdate.component.css']
})

export class UsuariosUpdateComponent implements OnInit {

    httpOptions: any;

    foto: any;
    info: any;

    ChangeFoto!: FormGroup;
    ChangePassword!: FormGroup;
    ChangeCorreo!: FormGroup;
    ChangeTelefono!: FormGroup;

    UsuariosArray: any[] = [];

    element1 = false;

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

            this._http.get(this.usuarios.URL + `indexespecifico/${this.id}`, this.httpOptions).subscribe((data: any) => {
                console.log(data)
                this.UsuariosArray = data;
            });
        })

        this.ChangeFoto = new FormGroup({
            photo: new FormControl(Validators.required),
        });

        this.ChangePassword = new FormGroup({
            password: new FormControl(Validators.required),
        });

        this.ChangeCorreo = new FormGroup({
            email: new FormControl(Validators.required),
        });

        this.ChangeTelefono = new FormGroup({
            phone: new FormControl(Validators.required),
        });

    }

    get f() {
        return this.ChangeFoto.controls;
    }

    get p() {
        return this.ChangePassword.controls;
    }

    get c() {
        return this.ChangeCorreo.controls;
    }

    get t() {
        return this.ChangeTelefono.controls;
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

    UpdateUsuario(): void {
    }

    MensajeCorrecto() {
        Swal.fire(
            'Usuario actualizado!',
            'El usuario se ha actualizado correctamente!',
            'success'
        );
    }

    showData() {
        this.element1 = true;
    }

    hideData() {
        this.foto = null;
        this.element1 = false;
    }

}
