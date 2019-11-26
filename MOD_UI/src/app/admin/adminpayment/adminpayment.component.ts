import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/Models/payment';
import { PlaymentService } from 'src/app/Services/playment.service';

@Component({
  selector: 'app-adminpayment',
  templateUrl: './adminpayment.component.html',
  styleUrls: ['./adminpayment.component.css']
})
export class AdminpaymentComponent implements OnInit {
  item:Payment;
  list:Payment[];
  msg:string;
  constructor(private _service:PlaymentService) { 
    this.item = new Payment();
    this._service.GetallPayment().subscribe(k=>this.list=k);
  }

  ngOnInit() {
  }

}
