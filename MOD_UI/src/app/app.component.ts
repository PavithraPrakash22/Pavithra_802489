import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coursera-client';
  constructor(private router:Router){}
  settok(){
    var set='';
    set=localStorage.getItem('token');
    if(set==null)
    {
      return 0;
    }
    else{
      return 1;
    }
  }
    logout(){
      localStorage.removeItem('token');
      this.router.navigate(['userlogin']);
    }

}
