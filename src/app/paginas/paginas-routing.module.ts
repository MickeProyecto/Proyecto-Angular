import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { PolicialComponent } from './policial/policial.component';
import { AirsoftComponent } from './airsoft/airsoft.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'policial', component: PolicialComponent },
  { path: 'airsoft', component: AirsoftComponent },
  { path: 'usuarios', component: UsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule {
}