import { Component, OnInit } from '@angular/core';
import {Training} from '../Model/Training';
import {TrainingService} from '../Service/Training/training.service';



@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  listTraining: any ;
  form = true;
  training!: Training  ;
  closeResult!: string ;


  constructor( private trainingService: TrainingService    ) { }

  ngOnInit(): void {

    this.trainingService.getAllTraining().subscribe(res => {
          console.log(res);
          this.listTraining = res;
        }
    );

    this.training = {
      trainingId : null ,

      title: null ,
      description: null ,
      startDate: null ,
      endDate: null ,
      hoursNumbers: null ,
      maxParticipant: null ,
      costs: null ,
      certified: false ,
      coachid: null ,

    };
  }

  getAllTraining() {
    this.trainingService.getAllTraining().subscribe(res => this.listTraining = res );

  }
  addTraining( c: any) {
    this.trainingService.addTraining(c)
        .subscribe(() => {
          this.getAllTraining();
          this.form = false;

        });
  }
  addAndAffectTrainingToCoach(training: Training, idCoach: any ) {

    this.trainingService.addAndAffectTrainingToCoach(training, idCoach)
        .subscribe(() => {
          this.getAllTraining();
          this.form = false;

        });


  }

  updateTraining( c: any) {
    this.trainingService.updateTraining(c).subscribe();
  }
  deleteTraining( idTraining: any) {
    this.trainingService.deleteTraining(idTraining).subscribe(() => this.getAllTraining());
  }

}
