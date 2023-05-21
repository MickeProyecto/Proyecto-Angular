import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorias } from 'src/app/models/categorias.model';
import { Productos } from 'src/app/models/productos.model';
import { UsuariosService } from '../../servicio/usuarios.service';
import { MatDialog } from '@angular/material/dialog';
import { BorrarcategoriaComponent } from './BorrarCategoria/BorrarcategoriaComponent.component';
import { BorrarProductoComponent } from './BorrarProducto/BorrarProducto.component';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-airsoft',
  templateUrl: './airsoft.component.html',
  styleUrls: ['./airsoft.component.css']
})

export class AirsoftAdminComponent implements OnInit {

  httpOptions: any;

  materiales: any[] = [];
  materialesfiltrados: any[] = [];
  categorias: any[] = [];
  categoriasfiltradas: any[] = [];
  categorianombre: any[] = [];

  img: any;

  error = true;

  element1 = true;
  element2 = true;
  element3 = true;
  element4 = true;
  element5 = true;
  element6 = true;

  productosForm!: FormGroup;
  categoriasForm!: FormGroup;

  constructor(public usuarios: UsuariosService,
    public router: Router,
    private _http: HttpClient,
    public dialog: MatDialog
  ) { }

  info: any;
  token: any;

  ngOnInit() {


    document.title = "CRUD Material Airsoft - Niké's Arsenal"

    this.productosForm = new FormGroup({
      img: new FormControl('', Validators.required),

      nombre: new FormControl('', Validators.required),

      marca: new FormControl('', Validators.required),

      descripcion: new FormControl('', Validators.required),

      cantidad: new FormControl('', Validators.required),

      precio: new FormControl('', Validators.required),
    });

    this.categoriasForm = new FormGroup({
      nombre: new FormControl('', Validators.required),

      descripcion: new FormControl('', Validators.required),
    });

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

    this._http.get(this.usuarios.URL + 'indexc', this.httpOptions).subscribe((data: any) => {
      this.categorias = data;
      this.categoriasfiltradas = this.categorias.filter(categorias => categorias.tipo === "airsoft");
    });

    this._http.get(this.usuarios.URL + 'indexm', this.httpOptions).subscribe((data: any) => {
      this.materiales = data;
      this.materialesfiltrados = this.materiales.filter(materiales => {
        const id = this.categorias.find(id => id.id === materiales.id_categoria);
        return id.tipo === "airsoft";
      })

      for (let dato of this.materialesfiltrados) {
        this._http.get(this.usuarios.URL + `indexcex/${dato.id_categoria}`, this.httpOptions).subscribe((data: any) => {
          this.categorianombre = data;

          console.log (this.categorianombre);
        });
      }
    });

  }

  get p() {
    return this.productosForm.controls;
  }

  get c() {
    return this.categoriasForm.controls;
  }

  confirmarCategoria(id_categoria: any) {
    console.log(id_categoria.value);

    if (id_categoria.value == '--Elige la categoria--') {
      this.element5 = true;
    } else {
      this.element5 = false;
    }
  }

  confirmarTipo(tipo: any) {
    console.log(tipo);

    if (tipo.value == '--Elegir el tipo--') {
      this.element6 = true;
    } else {
      this.element6 = false;
    }
  }

  onFileChange(event: any) {
    this.img = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(this.img);
    reader.onload = (event: any) => {
      this.img = reader.result;
      console.log(this.img);
    }
  }

  addProducto(id_categoria: any): void {

    const producto: Productos = {
      "img": this.img,
      "nombre": this.productosForm.value.nombre,
      "marca": this.productosForm.value.marca,
      "descripcion": this.productosForm.value.descripcion,
      "cantidad": this.productosForm.value.cantidad,
      "precio": this.productosForm.value.precio,
      "id_categoria": id_categoria.value
    };

    console.log(producto);

    this.usuarios.addProductos(producto).subscribe({
      next: (value: Productos) => {
        console.log(value);

        this.router.navigate(['../airsoftAdmin']);
      }
    });
    this.productosForm.reset();
  }

  addCategoria(tipo: any): void {

    const categoria: Categorias = {
      "nombre": this.categoriasForm.value.nombre,
      "descripcion": this.categoriasForm.value.descripcion,
      "tipo": tipo.value,
    };

    console.log(categoria);

    this.usuarios.addCategorias(categoria).subscribe({
      next: (value: Categorias) => {
        console.log(value);

        this.router.navigate(['../airsoftAdmin']);
      }
    });
    this.categoriasForm.reset();
  }

  openBorrarCategoria(event: any, idCategoria: any) {
    this.usuarios.setIdCategoria(idCategoria);

    let dialogRef = this.dialog.open(BorrarcategoriaComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'home') {
        this.router.navigate(['/airsoftAdmin']);
      }
    });
  }

  openBorrarProducto(event: any, idProducto: any) {
    this.usuarios.setIdProducto(idProducto);

    let dialogRef = this.dialog.open(BorrarProductoComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'home') {
        this.router.navigate(['/airsoftAdmin']);
      }
    });
  }

  MensajeCorrectoP() {
    Swal.fire(
      'Producto creado!',
      'El producto se a creado correctamente!',
      'success'
    );
  }

  MensajeCorrectoC() {
    Swal.fire(
      'Categoria creada!',
      'La categoria se a creado correctamente!',
      'success'
    );
  }

  showButton1() {
    this.element1 = false;
  }

  hideButton1() {
    this.element1 = true;
  }

  showButton2() {
    this.element2 = false;
  }

  hideButton2() {
    this.element2 = true;
  }

  showButton3() {
    this.element3 = false;
  }

  hideButton3() {
    this.element3 = true;
  }

  showButton4() {
    this.element4 = false;
  }

  hideButton4() {
    this.element4 = true;
  }

}
