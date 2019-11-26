import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/Services/mentor.service';

@Component({
  selector: 'app-meditprofile',
  templateUrl: './meditprofile.component.html',
  styleUrls: ['./meditprofile.component.css']
})
export class MeditprofileComponent implements OnInit {

  email;
  password;
  constructor(private _service : MentorService) { }

  ngOnInit() {
  }
  public UpdateMentor()
  {
    this._service.UpdateMentor(this.email, this.password).subscribe();
  }  


}
