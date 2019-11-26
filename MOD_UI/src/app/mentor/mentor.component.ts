import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mentor } from '../Models/mentor';
import { MentorService } from '../Services/mentor.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
item:Mentor;
id:number;
mentorname='';
  constructor(public router:Router, private _service :MentorService) { 
    this.item = new Mentor;
    this.id=+localStorage.getItem('token');
    this._service.GetById(this.id).subscribe(k=>this.item=k);
    this.mentorname=this.item.mentorFName+' '+this.item.mentorLName;
   
  }

  ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
      this.router.navigate(['userlogin']);
    }
 
 
 }
 logout(){
   localStorage.removeItem('token');
   this.router.navigate(['userlogin']);
 }
}
