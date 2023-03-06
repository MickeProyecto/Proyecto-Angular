import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginasRoutingModule } from "./paginas-routing.module";
import { LoginComponent } from './login/login.component';
import { AirsoftComponent } from './airsoft/airsoft.component';
import { PolicialComponent } from './policial/policial.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    LoginComponent,
    AirsoftComponent,
    PolicialComponent,
    UsuariosComponent,
    CarritoComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    ReactiveFormsModule, FormsModule
  ]
})
export class PaginasModule {
}
