import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mentor } from '../Models/mentor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  path:string='http://localhost:25736/Mentor/'
  constructor(private _client:HttpClient) { }
  public AddMentor(item:Mentor):Observable<string>
  {
     return this._client.post<string>(this.path+'AddMentor',item);
  }
  public GetAllMentor():Observable<Mentor[]>
 {
     return this._client.get<Mentor[]>(this.path+'GetAllMentor');
 }
 public GetById(id:number):Observable<Mentor>
 {
   return this._client.get<Mentor>(this.path+'GetMentorById/'+id);
 }
  public UpdateMentor(email,password)
  {
    return this._client.put(this.path+'UpdateMentor/'+email+'/'+password,email,password);
  }
  public DeleteMentor(id:number)
 {
    return this._client.delete(this.path+'DeleteMentor/'+id);
  } 
  public BlockMentor(Id:number)
  {
    return this._client.put(this.path+'BlockUser/'+Id,Id);
  }
}
