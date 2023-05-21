import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuariosService } from 'src/app/paginas/servicio/usuarios.service';
import Swal from 'sweetalert2'


@Component({
    selector: 'app-ProductoUpdate',
    templateUrl: './ProductoUpdate.component.html',
    styleUrls: ['./ProductoUpdate.component.css']
})

export class ProductoUpdateAirsoftComponent implements OnInit {

    httpOptions: any;

    foto: any;
    info: any;

    ChangeFoto!: FormGroup;
    ChangeNombre!: FormGroup;
    ChangeMarca!: FormGroup;
    ChangeDescripcion!: FormGroup;
    ChangeCantidad!: FormGroup;
    ChangePrecio!: FormGroup;

    MaterialArray: any[] = [];

    CategoriaArray: any[] = [];

    CategoriaEspecifica: any[] = [];

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

        document.title = "Actualizar Producto - Niké's Arsenal"

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

            this._http.get(this.usuarios.URL + `indexmex/${this.id}`, this.httpOptions).subscribe((data: any) => {
                console.log(data)
                this.MaterialArray = data;

                for (let dato of this.MaterialArray) {
                    this._http.get(this.usuarios.URL + `indexcex/${dato.id_categoria}`, this.httpOptions).subscribe((data: any) => {
                        console.log(data)
                        this.CategoriaEspecifica = data;
                    });
                }
            });
        })

        this._http.get(this.usuarios.URL + 'indexc', this.httpOptions).subscribe((data: any) => {
            console.log(data)
            this.CategoriaArray = data;
        });

        this.ChangeFoto = new FormGroup({
            img: new FormControl('', Validators.required),
        });

        this.ChangeNombre = new FormGroup({
            nombre: new FormControl('', Validators.required),
        });

        this.ChangeMarca = new FormGroup({
            marca: new FormControl('', Validators.required),
        });

        this.ChangeDescripcion = new FormGroup({
            descripcion: new FormControl('', Validators.required),
        });

        this.ChangeCantidad = new FormGroup({
            cantidad: new FormControl('', Validators.required),
        });

        this.ChangePrecio = new FormGroup({
            precio: new FormControl('', Validators.required),
        });
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

    confirmarIdCategoria(id_categoria: any) {
        console.log(id_categoria);

        if (id_categoria.value == '--Elegir una nueva categoria--') {
            this.element4 = true;
        } else {
            this.element4 = false;
        }
    }

    UpdateFoto(): void {

        let foto = this.foto;

        const changeFoto = {
            "img": foto
        };

        console.log(changeFoto);

        this._http.put(this.usuarios.URL + `updatefotom/${this.id}`, changeFoto, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeFoto.reset();
    }

    UpdateNombre(): void {

        const changeNombre = {
            "nombre": this.ChangeNombre.value.nombre
        };

        console.log(changeNombre);

        this._http.put(this.usuarios.URL + `updatenombrem/${this.id}`, changeNombre, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeNombre.reset();
    }

    UpdateMarca(): void {

        const changeMarca = {
            "marca": this.ChangeMarca.value.marca
        };

        console.log(changeMarca);

        this._http.put(this.usuarios.URL + `updatemarcam/${this.id}`, changeMarca, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeMarca.reset();
    }

    UpdateDescripcion(): void {

        const changeDescripcion = {
            "descripcion": this.ChangeDescripcion.value.descripcion
        };

        console.log(changeDescripcion);

        this._http.put(this.usuarios.URL + `updatedescripcionm/${this.id}`, changeDescripcion, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeDescripcion.reset();
    }

    UpdateCantidad(): void {

        const changeCantidad = {
            "cantidad": this.ChangeCantidad.value.cantidad
        };

        console.log(changeCantidad);

        this._http.put(this.usuarios.URL + `updatecantidadm/${this.id}`, changeCantidad, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeCantidad.reset();
    }


    UpdatePrecio(): void {

        const changePrecio = {
            "precio": this.ChangePrecio.value.precio
        };

        console.log(changePrecio);

        this._http.put(this.usuarios.URL + `updatepreciom/${this.id}`, changePrecio, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeCantidad.reset();
    }

    UpdateIdCategoria(categoria: any): void {

        const changePrecio = {
            "id_categoria": categoria.value
        };

        console.log(changePrecio);

        this._http.put(this.usuarios.URL + `updateidcategoriam/${this.id}`, changePrecio, this.httpOptions).subscribe(() => {
            // Redirigir al usuario a la página anterior
        })

        this.ChangeCantidad.reset();
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
        this.element5 = true;
    }

    hideData4() {
        this.element5 = false;
    }

    showData5() {
        this.element6 = true;
    }

    hideData5() {
        this.element6 = false;
    }

    showData6() {
        this.element7 = true;
    }

    hideData6() {
        this.element7 = false;
    }

    showData7() {
        this.element8 = true;
    }

    hideData7() {
        this.element8 = false;
    }
}
