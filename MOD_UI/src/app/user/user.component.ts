import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  item:User;
  username='';
  constructor(private router : Router,private _service:UserService) { 
    this.item = new User;
    this.id=+localStorage.getItem('token');
    this._service.GetById(this.id).subscribe(k=>this.item=k);
    this.username=this.item.userFName+' '+this.item.userLName;
    console.log(this.username);
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
