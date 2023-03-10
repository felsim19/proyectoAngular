import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarContactoComponent } from './components/admin/listar-contacto/listar-contacto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CrearProductoComponent } from './components/admin/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/admin/listar-productos/listar-productos.component';
import { EditarContactoComponent } from './components/admin/editar-contacto/editar-contacto.component';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { AccesoriosComponent } from './components/accesorios/accesorios.component';
import { CiclistaComponent } from './components/ciclista/ciclista.component';


const routes: Routes = [
    {path: "", component:InicioComponent},
    {path: "catalogo", component:CatalogoComponent},
    {path: "repuestos", component:RepuestosComponent},
    {path: "accesorios", component:AccesoriosComponent},
    {path: "ciclista", component:CiclistaComponent},
    {path: "contacto", component:ContactoComponent},
    {path: "Admin-page", component:AdminUsersComponent},
    {path: "listar-contacto", component:ListarContactoComponent},
    {path: "Editar-contactos", component:EditarContactoComponent},
    {path: "Editar-contactos/:id",component:EditarContactoComponent},
    {path: "Crear-producto", component: CrearProductoComponent},
    {path: "Editar-producto/:id", component:CrearProductoComponent} ,
    {path: "listar-producto", component:ListarProductosComponent},
    {path: "404", component:NotFoundComponent},
    {path: "**", redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
