import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProductoComponent} from './producto/producto.component';
import {CarritoComponent} from './carrito/carrito.component';
const routes: Routes = [
    {path: '', component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'producto',component:ProductoComponent},
    {path:'carrito',component:CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
