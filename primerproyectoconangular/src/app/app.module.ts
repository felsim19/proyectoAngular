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
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ProductoComponent } from './components/producto/producto.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    CatalogoComponent,
    ContactoComponent,
    NotFoundComponent,
    FooterComponent,
    ScrollToTopComponent,
    SocialMediaComponent,
    ProductoComponent,
    WhatsappComponent,
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
