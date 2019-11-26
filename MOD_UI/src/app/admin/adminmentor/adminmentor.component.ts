import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/Models/mentor';
import { MentorService } from 'src/app/Services/mentor.service';

@Component({
  selector: 'app-adminmentor',
  templateUrl: './adminmentor.component.html',
  styleUrls: ['./adminmentor.component.css']
})
export class AdminmentorComponent implements OnInit {
  item:Mentor;
  list:Mentor[];
  msg:string;
  
  constructor(private _service:MentorService) { 
    this.item = new Mentor();
    this._service.GetAllMentor().subscribe(k=>this.list=k);
  }

  ngOnInit() {
  }
  public DeleteMentor(mentorId:number)
  {
    this._service.DeleteMentor(mentorId).subscribe(k=>k=this.msg);
  }
  public BlockMentor(mentorId:number)
  {
    this._service.BlockMentor(mentorId).subscribe(k=>this.msg);
  }
}
