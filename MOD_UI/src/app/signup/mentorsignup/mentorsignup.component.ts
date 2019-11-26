import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { Mentor } from 'src/app/Models/mentor';
import { MentorService } from 'src/app/Services/mentor.service';
import { TechnologyService } from 'src/app/Services/technology.service';
import { Technology } from 'src/app/Models/technology';


@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})
export class MentorsignupComponent implements OnInit {
  item:Mentor;
  list:Mentor[];
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
  lot = new FormControl('', [
    Validators.required
  ]);
  experience = new FormControl('', [
    Validators.required
  ]);
  timeslot= new FormControl('', [
    Validators.required
  ]);
  // enddate = new FormControl('', [
  //   Validators.required
  // ]);
  item1:Technology;
  options:Technology[];
  constructor(private _service:MentorService,private _tservice : TechnologyService) { 
    this.item = new Mentor();
    this.item.mentorActive=true;
    this.item.mentorAvailability=true; 
    this.item1 = new Technology();
    this._tservice.GetAllSkills().subscribe(k=>this.options=k);
  }

  ngOnInit() {
  }
  public Add()
  {
    
    this._service.AddMentor(this.item).subscribe(k=>this.msg=k)
  }
  
}
