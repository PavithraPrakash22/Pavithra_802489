import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {
  item:User;
  list:User[];
  msg:string;
  constructor(private _service:UserService) {
    this.item = new User();
    this._service.GetAllUser().subscribe(k=>this.list=k);
   }

  ngOnInit() {
  }
  public DeleteUser(userId:number)
  {
    this._service.DeleteUser(userId).subscribe(k=>k=this.msg);
  }
  public BlockUser(userId:number)
  {
    this._service.BlockUser(userId).subscribe(k=>this.msg);
  }
}
