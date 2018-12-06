import { Component, OnInit, Input } from '@angular/core';
import {LocalStorageService,SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  constructor(private localst:LocalStorageService) { }
  @Input() compras:string = this.localst.retrieve("excompra");
  ngOnInit() {
  }
  cambiar()
  {
    return 'asd';
  }

}
