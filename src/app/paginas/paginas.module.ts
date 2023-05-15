import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginasRoutingModule } from "./paginas-routing.module";
import { TiendaComponent } from './tienda/tienda.component';
import { AirsoftClienteComponent } from './airsoft/airsoft.component';
import { AirsoftAdminComponent } from './administrador/airsoft/airsoft.component';
import { PolicialClienteComponent } from './policial/policial.component';
import { PolicialAdminComponent } from './administrador/policial/policial.component';
import { UsuariosComponent } from './administrador/usuarios/usuarios.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { DialogComponentPolicial } from './policial/DialogComponent.component';
import { DialogComponentAirsoft } from './airsoft/DialogComponent.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { VerPedidosComponent } from './Verperdidos/Verpedidos.component';
import { UsuariosUpdateComponent } from './administrador/usuarios/UpdateUsuarios/usuariosUpdate.component';
import { PuntosEntregaComponent } from './administrador/PuntosEntrega/puntosentrega.component';
import { PuntosEntregaUpdateComponent } from './administrador/PuntosEntrega/UpdatePuntosEntrega/PuntosEntregaUpdate.component';
import { CategoriaUpdateComponent } from './administrador/policial/EditarCategoria/CategoriaUpdate.component';
import { ProductoUpdateComponent } from './administrador/policial/EditarProducto/ProductoUpdate.component';
import { CategoriaAUpdateComponent } from './administrador/airsoft/EditarCategoria/CategoriaAUpdate.component';

@NgModule({
  declarations: [
    TiendaComponent,
    AirsoftClienteComponent,
    AirsoftAdminComponent,
    PolicialClienteComponent,
    PolicialAdminComponent,
    UsuariosComponent,
    CarritoComponent,
    PerfilComponent,
    DialogComponentPolicial,
    DialogComponentAirsoft,
    PedidosComponent,
    VerPedidosComponent,
    UsuariosUpdateComponent,
    PuntosEntregaComponent,
    PuntosEntregaUpdateComponent,
    CategoriaUpdateComponent,
    ProductoUpdateComponent,
    CategoriaAUpdateComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PaginasModule {
}
