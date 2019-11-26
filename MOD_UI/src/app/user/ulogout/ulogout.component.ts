import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-ulogout',
  templateUrl: './ulogout.component.html',
  styleUrls: ['./ulogout.component.css']
})
export class UlogoutComponent implements OnInit {
  email;
  password;
  constructor(private _service : UserService) { }

  ngOnInit() {
  }
  public UpdateUser()
  {
    this._service.UpdateUser(this.email, this.password).subscribe();
  }  

}
