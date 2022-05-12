import { Component, OnInit } from '@angular/core';
import {Training} from '../../Model/training';
import {TrainingService} from '../../Service/Training/training.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {
  listTraining: any;
  training!: Training;



  constructor(private trainingService: TrainingService,  private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {




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


        });
  }
  goToTrainingList() {
    this.router.navigate(['/training']);
  }

  addAndAffectTrainingToCoach(training: Training, idCoach: any ) {

    this.trainingService.addAndAffectTrainingToCoach(training, idCoach)
        .subscribe(() => {
          this.getAllTraining();
          this.goToTrainingList();


        });


  }

}
