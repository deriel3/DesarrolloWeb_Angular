import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
@Injectable()
export class DataService {
    private usuarios: string[]=[];
    constructor(private httpService: HttpService){}
  inicio(usuario:string,pass:string)
  {

  }
  getUsers()
  {
    this.httpService.getDatos()
    .subscribe(
      (data:Response)=>console.log(data)
    )
    
  }
}
