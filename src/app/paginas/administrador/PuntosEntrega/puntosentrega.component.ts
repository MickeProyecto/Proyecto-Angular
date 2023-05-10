import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsuariosService } from '../../servicio/usuarios.service';
import { Usuarios } from 'src/app/models/usuarios.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2'
import { BorrarPuntosEntregaComponent } from './BorrarPuntosEntrega/BorrarPuntosEntregaComponent.component';


@Component({
  selector: 'app-puntosentrega',
  templateUrl: './puntosentrega.component.html',
  styleUrls: ['./puntosentrega.component.css']
})

export class PuntosEntregaComponent implements OnInit {

  httpOptions: any;

  error = true;

  foto: any;
  info: any;

  PuntoEntregaForm!: FormGroup;

  UsuariosArray: any[] = [];

  element1 = true;
  element2 = true;


  constructor(private usuarios: UsuariosService,
    public router: Router,
    private _http: HttpClient,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {



    this.PuntoEntregaForm = new FormGroup({
      tienda: new FormControl('', Validators.required),

      provincia: new FormControl('', Validators.required),

      cp: new FormControl('', Validators.required),

      direccion: new FormControl('', Validators.required),

      mapa: new FormControl('', Validators.required),

      streeview: new FormControl('', Validators.required),

      encargado: new FormControl('', Validators.required),

      foto: new FormControl('', Validators.required)

    });


    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.info = JSON.parse(currentUser).value;
      console.log(this.info);
    }

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser') || '').access_token}`
      })
    };

    this._http.get(`${this.usuarios.URL}indexpu`, this.httpOptions).subscribe((data: any) => {
      this.UsuariosArray = data;
    });

  }

  get f() {
    return this.PuntoEntregaForm.controls;
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

  addPuntoEntrega(): void {

    const puntoentrega = {
      "tienda": this.PuntoEntregaForm.value.tienda,
      "provincia": this.PuntoEntregaForm.value.provincia,
      "cp": parseInt(this.PuntoEntregaForm.value.cp),
      "direccion": this.PuntoEntregaForm.value.direccion,
      "mapa": this.PuntoEntregaForm.value.mapa,
      "streeview": this.PuntoEntregaForm.value.streeview,
      "encargado": this.PuntoEntregaForm.value.encargado,
      "foto": this.foto
    };

    console.log(puntoentrega);

    this.usuarios.addPuntosDeEntrega(puntoentrega).subscribe({
      next: (value: Usuarios) => {

        console.log(value);

      }
    });

    this.PuntoEntregaForm.reset();
  }

  openBorrarPuntoEntrega(event: any, idPuntoEntrega: any) {

    this.usuarios.setIdPuntoEntrega(idPuntoEntrega);

    let dialogRef = this.dialog.open(BorrarPuntosEntregaComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'home') {

        this.router.navigate(['/PuntosEntrega']);
      }
    });
  }


  MensajeCorrecto() {
    Swal.fire(
      'Punto de entrega creado!',
      'El punto de entrega se a creado correctamente!',
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

}
