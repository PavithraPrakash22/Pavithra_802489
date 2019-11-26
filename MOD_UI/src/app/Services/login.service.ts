import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  path:string='http://localhost:25736/Login/'
  constructor(private _client:HttpClient) { }
  public Login(email:string,password:string):Observable<any>
  {
    return this._client.get<any>(this.path+'Validate/'+email+'/'+password);
  }
}
