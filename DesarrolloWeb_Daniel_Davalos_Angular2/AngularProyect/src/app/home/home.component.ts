import { Component, OnInit, Directive, ViewChild,AfterViewInit } from '@angular/core';
import {LocalStorageService,SessionStorageService} from 'ngx-webstorage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private localst:LocalStorageService) { }
  ngOnInit() {
  }
}
