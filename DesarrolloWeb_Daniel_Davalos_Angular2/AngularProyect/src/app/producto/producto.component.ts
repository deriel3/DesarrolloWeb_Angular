import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
private router: Router ) { }
  nombre;
  precio;
  cantidad;
  ngOnInit() {
    this.nombre=this.route.snapshot.queryParamMap.get('nombre');
    this.precio=this.route.snapshot.queryParamMap.get('precio');
    this.cantidad=this.route.snapshot.queryParamMap.get('unidades');
  }

}
