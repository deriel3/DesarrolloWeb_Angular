import { Component, OnInit, Directive, ViewChild,AfterViewInit } from '@angular/core';
import {LocalStorageService,SessionStorageService} from 'ngx-webstorage';
import { Barra} from '../barra/barra.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private localst:LocalStorageService) { }
  @ViewChild('child1') childOne: Barra;
  ngOnInit() {
    console.log(this.childOne.compras);
  }
  ngOnChanges() {
    if(this.localst.retrieve("excompra")!=null)
    {
      this.childOne.compras="true";
    }
  }
}
