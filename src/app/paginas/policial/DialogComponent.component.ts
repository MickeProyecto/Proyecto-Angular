import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from '../servicio/usuarios.service';
@Component({
    selector: 'app-dialog',
    template: `
    <h2 mat-dialog-title>Logout</h2>
    <form mat-dialog-content>
      <p>¿Que cantidad quieres de este producto?</p>
      <input id="cantidad" type="number" placeholder="Eliga la cantidad:">
    </form>
    <div mat-dialog-actions>
      <button id="Si" mat-button (click)="onHomeClick()">Añadir al carrito</button>
      <button id="No" mat-button (click)="onBackClick()">Cancelar</button>
    </div>
  `,
    styleUrls: ['./DialogComponent.component.css']
})
export class DialogComponent {

    httpOptions: any;

    policial: any;

    parametro: any;

    constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public usuarios: UsuariosService, private _http: HttpClient) { }


    onHomeClick() {

        this.parametro = this.usuarios.getParametro();

        this.httpOptions = {

            headers: new HttpHeaders({

                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser') || '').access_token}`

            })

        };

        console.log("Se agregó el producto con id " + this.parametro + " al carrito");

        // this._http.post(this.usuarios.URL + '', idProducto, this.httpOptions).subscribe((data: any) => {
        //     this.policial = data;
        //     console.log(this.policial);
        // })
    }

    onBackClick(): void {
        this.dialogRef.close('back');
    }
}