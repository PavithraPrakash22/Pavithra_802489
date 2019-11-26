import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  [x: string]: any;
  email;
  password;
  userList:User[]=[];
  constructor(private http:HttpClient,private router:Router,private _service:LoginService) { }
  
  ngOnInit() {
  }
  public Login()
  {
    this._service.Login(this.email,this.password).subscribe(data=>{
      console.log(data)
      if(data.message=='User')
      {
        console.log("HAHAHAHHAHAHA");
        localStorage.setItem('token',data.token);
        this.router.navigate(['user'],{relativeTo:this._activatedRoute});
      }
      else if(data.message=='Mentor')
      {
        localStorage.setItem('token',data.token);
        this.router.navigate(['mentor'],{relativeTo:this._activatedRoute});
      }
      else if(data.message=='Admin')
      {
        localStorage.setItem('token',data.token);
        this.router.navigate(['admin'],{relativeTo:this._activatedRoute});
      }
      else
      {
        console.log("Nothing found");
      }

    },
    err=>{
       console.log("subscribe err");
    });
  }
}
