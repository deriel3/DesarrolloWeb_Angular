import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { HttpService } from './http.service';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';
import { BarraComponent } from './barra/barra.component';
import { CatalagoComponent } from './catalago/catalago.component';
import { ProductoComponent } from './producto/producto.component';
import { FiltroPipe } from './filtro.pipe';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BarraComponent,
    CatalagoComponent,
    ProductoComponent,
    FiltroPipe,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
