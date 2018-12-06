import { Component, OnInit } from '@angular/core';
import {LocalStorageService,SessionStorageService} from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private localst:LocalStorageService,private httpClient: HttpClient,private router: Router) { }
  compras;
  total=0;
  ngOnInit() {
    if(this.localst.retrieve("excompra")!=null)
    {
      this.compras=this.localst.retrieve("carrito");
      for(let i=0;i<this.compras.length;i++)
      {
        this.total+=this.compras[i]["precio"]*this.compras[i]["cantidad"];
      }
      console.log(this.total);
    }
  }
  pagar()
  {
      this.localst.clear("excompra");
      this.localst.clear("carrito");
      this.router.navigate(['/home']);
  }
  cancelar()
  {
    this.router.navigate(['/home']);
  }

}
