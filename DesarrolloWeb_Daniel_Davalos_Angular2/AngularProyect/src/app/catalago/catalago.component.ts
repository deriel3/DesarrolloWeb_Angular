import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LocalStorageService,SessionStorageService} from 'ngx-webstorage';
import { Router } from "@angular/router";
@Component({
  selector: 'app-catalago',
  templateUrl: './catalago.component.html',
  styleUrls: ['./catalago.component.css']
})
export class CatalagoComponent implements OnInit {

  constructor(private httCliente: HttpClient,private session:SessionStorageService,private router: Router,private localst:LocalStorageService) { }
  productos;
  primera=[];
  segunda=[];
  tercera=[];
  cuarta=[];
  carro=[];
  ngOnInit()
  {
    //this.localst.clear("excompra");
    //this.localst.clear("carrito");
    let sesion_abierta=this.session.retrieve("loged");
    if(sesion_abierta=='y')
    {
      this.httCliente.get('https://angular-b495d.firebaseio.com/Productos/.json').subscribe((res)=>{
          this.productos=res;
          var c=0;
          for(var i=0;i<this.productos.length;i++)
          {
            if(c==0)
            {
              this.primera.push(this.productos[i]);
            }
            if(c==1)
            {
              this.segunda.push(this.productos[i]);
            }
            if(c==2)
            {
              this.tercera.push(this.productos[i]);
            }
            if(c==3)
            {
              this.cuarta.push(this.productos[i]);
            }
            if(c==4)
            {
              this.primera.push(this.productos[i]);
              c=0;
            }
            c++;
          }
      });
    }
    else
    {
      this.router.navigate(['/login']);
    }
  }
  anadircarrito(nombre,precio,cantidad)
  {
    this.localst.store("excompra",true);
    if(this.localst.retrieve("carrito")!=null)
    {
      let carro=this.localst.retrieve("carrito");
      let nueva_compra={"nombre":nombre,"precio":precio,"cantidad":cantidad};
      carro.push(nueva_compra);
      this.localst.store("carrito",carro);
      for(let i=0;i<carro.length;i++)
      {
        console.log(carro[i]);
      }
    }
    else
    {
      let carro=[{"nombre":nombre,"precio":precio,"cantidad":cantidad}];
      this.localst.store("carrito",carro);
      console.log("se creo una compra al carro"+ carro);
    }
  }

}
