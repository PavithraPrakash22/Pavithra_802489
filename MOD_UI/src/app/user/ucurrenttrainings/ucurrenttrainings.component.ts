import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/Services/training.service';
import { Training } from 'src/app/Models/training';

@Component({
  selector: 'app-ucurrenttrainings',
  templateUrl: './ucurrenttrainings.component.html',
  styleUrls: ['./ucurrenttrainings.component.css']
})
export class UcurrenttrainingsComponent implements OnInit {
  item:Training;
  list:Training[];
  msg:string;
  id:number;
  constructor(private _service:TrainingService) {
    this.item = new Training();
    this.id=+localStorage.getItem('token');
    this._service.GetTrainingByUser(this.id).subscribe(k=>this.list=k);
   }

  ngOnInit() {
  }

}
