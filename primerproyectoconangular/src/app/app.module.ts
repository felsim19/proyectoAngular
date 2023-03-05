import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ListarContactoComponent } from './components/admin/listar-contacto/listar-contacto.component';
import { MenuLateralComponent } from './components/admin/menu-lateral/menu-lateral.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { CrearProductoComponent } from './components/admin/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/admin/listar-productos/listar-productos.component';
import { EditarContactoComponent } from './components/admin/editar-contacto/editar-contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    CatalogoComponent,
    ContactoComponent,
    NotFoundComponent,
    FooterComponent,
    ListarContactoComponent,
    MenuLateralComponent,
    AdminUsersComponent,
    CrearProductoComponent,
    ListarProductosComponent,
    EditarContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
