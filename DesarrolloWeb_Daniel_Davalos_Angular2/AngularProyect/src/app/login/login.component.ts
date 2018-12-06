import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {SessionStorageService} from 'ngx-webstorage';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private httpClient: HttpClient,private session:SessionStorageService,private router: Router){}
  login: FormGroup;
  init=true;
  myData;
  ngOnInit()
  {
    this.login= new FormGroup({
      'usuario':new FormControl('',Validators.required),
      'pass':new FormControl('',Validators.required)
    });
  }
  enviarform(us,cont)
  {
      var rank="i";
      this.httpClient.get('https://angular-b495d.firebaseio.com/Usuarios/.json').subscribe((res)=>{
          this.myData=res;
          for(var i=0;i<this.myData.length ;i++)
          {
              if(this.myData[i]["usuario"]==us)
              {
                if(this.myData[i]["pass"]==cont)
                {
                    rank="c";
                }
              }
           }
           if(rank=="i")
           {
             this.init=false;
             console.log("No inicio");
           }
           else
           {
             this.init=true;
             this.session.store("loged","y");
             console.log("inicio");
             this.router.navigate(['/home']);
           }

      });

      //console.log(this.session.retrieve("y"));

  }
}
