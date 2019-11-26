import { Injectable } from '@angular/core';
import { Mentor } from '../Models/mentor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 
  path: String = 'http://localhost:25736/User/'
  constructor(private _client : HttpClient) { }
  public SearchMentor(skill): Observable<Mentor[]>
  {
    return this._client.get<Mentor[]>(this.path+'GetMentorBySkill/'+skill);
  }
}
