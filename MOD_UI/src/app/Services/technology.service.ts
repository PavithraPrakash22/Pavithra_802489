import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from '../Models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  path:string='http://localhost:25736/Technology/'
  constructor(private _client:HttpClient) { }
  public GetAllSkills():Observable<Technology[]>
  { 
      return this._client.get<Technology[]>(this.path+'GetAllSkills');
  }
  public DeleteSkills(id:number)
  {
     return this._client.delete(this.path+'DeleteSkills/'+id);
   } 
   public AddTechnology(item:Technology):Observable<string>
   {
     return this._client.post<string>(this.path+'AddSkills',item);
   } 

   
}
