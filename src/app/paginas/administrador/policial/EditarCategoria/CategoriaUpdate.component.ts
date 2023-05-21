import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuariosService } from 'src/app/paginas/servicio/usuarios.service';
import Swal from 'sweetalert2'


@Component({
    selector: 'app-CategoriaUpdate',
    templateUrl: './CategoriaUpdate.component.html',
    styleUrls: ['./CategoriaUpdate.component.css']
})

export class CategoriaUpdatePolicialComponent implements OnInit {

    httpOptions: any;

    foto: any;
    info: any;

    ChangeNombre!: FormGroup;
    ChangeDescripcion!: FormGroup;

    UsuariosArray: any[] = [];

    element1 = false;
    element2 = false;
    element3 = false;
    element4 = false;

    private sub: any;

    id: number | undefined;

    constructor(private usuarios: UsuariosService,
        public router: Router,
        private route: ActivatedRoute,
        private _http: HttpClient) { }

    ngOnInit(): void {

        document.title = "Actualizar Categoria - Niké's Arsenal"

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

            this._http.get(this.usuarios.URL + `indexcex/${this.id}`, this.httpOptions).subscribe((data: any) => {
                console.log(data)
                this.UsuariosArray = data;
            });
        })

        this.ChangeNombre = new FormGroup({
            nombre: new FormControl('', Validators.required),
        });

        this.ChangeDescripcion = new FormGroup({
            descripcion: new FormControl('', Validators.required),
        });

    }

    get n() {
        return this.ChangeNombre.controls;
    }

    get d() {
        return this.ChangeDescripcion.controls;
    }

    confirmarTipo(tipo: any) {
        console.log(tipo);

        if (tipo.value == '--Elegir un nuevo tipo--') {
            this.element4 = true;
        } else {
            this.element4 = false;
        }
    }

    UpdateNombre(): void {


        const changeNombre = {
            "nombre": this.ChangeNombre.value.nombre
        };

        console.log(changeNombre);

        this._http.put(this.usuarios.URL + `updatecnombre/${this.id}`, changeNombre, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeNombre.reset();
    }

    UpdateDescripcion(): void {

        const changeDescripcion = {
            "descripcion": this.ChangeDescripcion.value.descripcion
        };

        console.log(changeDescripcion);

        this._http.put(this.usuarios.URL + `updatecdescripcion/${this.id}`, changeDescripcion, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeDescripcion.reset();
    }

    UpdateTipo(tipo: any): void {

        const changeTipo = {
            "tipo": tipo.value
        };

        console.log(changeTipo);

        this._http.put(this.usuarios.URL + `updatectipo/${this.id}`, changeTipo, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

    }

    MensajeCorrecto() {
        Swal.fire(
            'Categoria actualizado!',
            'La categoria se ha actualizado correctamente!',
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
}
