import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
    {path: "", component:InicioComponent},
    {path: "catalogo", component:CatalogoComponent},
    {path: "contacto", component:ContactoComponent},
    {path: "404", component:NotFoundComponent},
    {path: "producto", component:ProductoComponent},
    {path: "**", redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
