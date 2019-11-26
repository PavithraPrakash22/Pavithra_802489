import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  item:User;
  list:User[];
  msg:string;
  firstname = new FormControl('', [
    Validators.required
  ]);
  lastname = new FormControl('', [
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required
  ]);
  repeatpassword = new FormControl('', [
    Validators.required
  ]);
  email= new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  mobileno = new FormControl('', [
    Validators.required,
  ]);
  constructor(private _service:UserService,private router:Router) { 
    this.item = new User();
    this.item.userActive=true;
  }

  ngOnInit() {
  }
  public Add()
  {
    
    this._service.AddUser(this.item).subscribe(k=>this.msg=k)
    this.router.navigate(['userlogin']);
  }
}
