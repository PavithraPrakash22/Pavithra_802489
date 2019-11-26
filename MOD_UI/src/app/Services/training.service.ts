import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../Models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  path:string='http://localhost:25736/Training/'
  constructor(private _client:HttpClient) { }
  public GetAllTraining():Observable<Training[]>
  { 
      return this._client.get<Training[]>(this.path+'GetTrainings');
  }
  public GetTrainingByUser(id :number):Observable<Training[]>
  { 
      return this._client.get<Training[]>(this.path+'GetTrainingByUser/'+id);
  }
  public GetTrainingByMentor(id :number):Observable<Training[]>
  { 
      return this._client.get<Training[]>(this.path+'GetTrainingByMentor/'+id);
  }
  // public AddTrainings(item:Training):Observable<string>
  // {
  //   return this._client.post<string>(this.path+'/AddTrainings',item);
  // }
  
}
