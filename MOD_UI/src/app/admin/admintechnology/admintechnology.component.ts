import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/Models/technology';
import { TechnologyService } from 'src/app/Services/technology.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admintechnology',
  templateUrl: './admintechnology.component.html',
  styleUrls: ['./admintechnology.component.css']
})
export class AdmintechnologyComponent implements OnInit {
  item:Technology;
  list:Technology[];
  msg:string;
  addclick;
  constructor(private _service:TechnologyService,private router:Router) { 
    this.item = new Technology();
    this._service.GetAllSkills().subscribe(k=>this.list=k);
    this.addclick=0;
  }

  ngOnInit() {
  }
  public DeleteSkills(skillId:number)
  {
    this._service.DeleteSkills(skillId).subscribe(k=>k=this.msg);
  }

  public add()
  {
      this.addclick=1;
  }
  public AddTechnology()
  {
    
    this._service.AddTechnology(this.item).subscribe(k=>this.msg=k)
    
  }

}
