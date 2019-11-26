import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  stt:any;
  path:string='http://localhost:25736/User/'
  constructor(private _client:HttpClient) { }
  public AddUser(item:User):Observable<string>
  {
    return this._client.post<string>(this.path+'AddUser',item);
  }
  public GetAllUser():Observable<User[]>
  { 
      return this._client.get<User[]>(this.path+'GetAllUser');
  }
  public DeleteUser(id:number)
  {
    return this._client.delete(this.path+'DeleteUser/'+id);
  }  
  public UpdateUser(email,password)
  {
    return this._client.put(this.path+'UpdateUser/'+email+'/'+password,email,password);
  }
  public BlockUser(Id:number)
  {
    return this._client.put(this.path+'BlockUser/'+Id,Id);
  }
  public GetById(id:number):Observable<User>
  {
    return this._client.get<User>(this.path+'GetUserById/'+id);
  }
}
