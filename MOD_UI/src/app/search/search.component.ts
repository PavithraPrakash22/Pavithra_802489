import { Component, OnInit } from '@angular/core';
import { Mentor } from '../Models/mentor';
import { SearchService } from '../Services/search.service';
import { HttpClient } from '@angular/common/http';
import { TechnologyService } from '../Services/technology.service';
import { Technology } from '../Models/technology';
import { Training } from '../Models/training';
import { TrainingService } from '../Services/training.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  onclick:number;
  item:Mentor;
  list:Mentor[];
  skill;
  item1:Technology;
  options:Technology[];
  item2:Training;
  data:Training[];
  constructor(private router : Router,private _service : SearchService,private _tservice : TechnologyService, private http: HttpClient,private _trservice:TrainingService) { 
    //this.item1 = new Technology();
    this.item2 = new Training();
    this._tservice.GetAllSkills().subscribe(k=>this.options=k);
    
    this.onclick=0;
  }
  ngOnInit() {
    
  }
   public Search()
  {
    this.onclick=1;
    this._service.SearchMentor(this.skill).subscribe(k=>
      {this.list=k
        console.log(k)
      });
  }
  // public book(mentorId:number)
  // {
  //   if(localStorage.getItem('token')==null)
  //   {
  //     this.router.navigate(['userlogin']);
  //   }
  //   this.item2.userId=+localStorage.getItem('token');
  //   this.item2.mentorId=mentorId;
    
  //   //=this.;
  //   //this.item2.startDate.getDate();
  //   this._trservice.AddTrainings(this.item2);

  // }

}
