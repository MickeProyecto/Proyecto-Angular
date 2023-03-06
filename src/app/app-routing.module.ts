import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './paginas/main-page/main-page.component';
import { LoginComponent } from './paginas/login/login.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { AirsoftComponent } from './paginas/airsoft/airsoft.component';
import { PolicialComponent } from './paginas/policial/policial.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'policial', component: PolicialComponent },
  { path: 'airsoft', component: AirsoftComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
