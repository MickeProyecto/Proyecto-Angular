import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginasRoutingModule} from "./paginas-routing.module";
import { LoginComponent } from './login/login.component';
import { AirsoftComponent } from './airsoft/airsoft.component';
import { PolicialComponent } from './policial/policial.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    LoginComponent,
    AirsoftComponent,
    PolicialComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule
  ]
})
export class PaginasModule {
}
