import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginasRoutingModule} from "./paginas-routing.module";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule
  ]
})
export class PaginasModule {
}
