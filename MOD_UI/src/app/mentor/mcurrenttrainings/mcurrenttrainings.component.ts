import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/Models/training';
import { TrainingService } from 'src/app/Services/training.service';

@Component({
  selector: 'app-mcurrenttrainings',
  templateUrl: './mcurrenttrainings.component.html',
  styleUrls: ['./mcurrenttrainings.component.css']
})
export class McurrenttrainingsComponent implements OnInit {
  item:Training;
  list:Training[];
  msg:string;
  id:number;
  constructor(private _service:TrainingService) {
    this.item = new Training();
    this.id=+localStorage.getItem('token');
    this._service.GetTrainingByMentor(this.id).subscribe(k=>this.list=k);
   }

  ngOnInit() {
  }

}
