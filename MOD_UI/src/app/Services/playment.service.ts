import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../Models/payment';

@Injectable({
  providedIn: 'root'
})
export class PlaymentService {
  path:string='http://localhost:25736/Payment/'
  constructor(private _client:HttpClient) { }
  public GetallPayment():Observable<Payment[]>
  { 
      return this._client.get<Payment[]>(this.path+'GetAllPayment');
  }
  public AddPayment(item:Payment):Observable<string>
  { 
      return this._client.post<string>(this.path+'AddPayment',item);
  }
}
