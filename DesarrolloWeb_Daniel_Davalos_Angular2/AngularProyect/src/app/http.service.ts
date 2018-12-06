import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class HttpService {
  private serverUrl="https://angular-b495d.firebaseio.com/Usuarios/.json";
  constructor (private http:HttpClient){}
  getDatos()
  {
    let headers= this.createReaquestHeader();
    return this.http.get(this.serverUrl, { headers: headers });
  }
  private createReaquestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
         });
        return headers;
    }
}
