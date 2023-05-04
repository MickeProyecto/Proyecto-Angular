import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { UsuariosComponent } from './paginas/administrador/usuarios/usuarios.component';
import { AirsoftClienteComponent } from './paginas/airsoft/airsoft.component';
import { AirsoftAdminComponent } from './paginas/administrador/airsoft/airsoft.component';
import { PolicialClienteComponent } from './paginas/policial/policial.component';
import { PolicialAdminComponent } from './paginas/administrador/policial/policial.component';
import { PedidosComponent } from './paginas/pedidos/pedidos.component';
import { VerPedidosComponent } from './paginas/Verperdidos/Verpedidos.component';
import { UsuariosUpdateComponent } from './paginas/administrador/usuarios/UpdateUsuarios/usuariosUpdate.component';
import { PuntosEntregaComponent } from './paginas/administrador/PuntosEntrega/puntosentrega.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'policialCliente', component: PolicialClienteComponent },
  { path: 'policialAdmin', component: PolicialAdminComponent },
  { path: 'airsoftCliente', component: AirsoftClienteComponent },
  { path: 'airsoftAdmin', component: AirsoftAdminComponent },
  { path: 'confirmarCompra', component: PedidosComponent },
  { path: 'VerPedidos', component: VerPedidosComponent },
  { path: 'UpdateUsuarios/:id', component: UsuariosUpdateComponent },
  { path: 'PuntosEntrega', component: PuntosEntregaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
