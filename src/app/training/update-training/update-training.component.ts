import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Training} from '../../Model/training';
import {TrainingService} from '../../Service/Training/training.service';
import {QuizService} from '../../Service/Quiz/quiz.service';

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.css']
})
export class UpdateTrainingComponent implements OnInit {
trainingId: any;
training: any;


  constructor(private route: ActivatedRoute , private trainingService: TrainingService , private router: Router ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.trainingId = params['trainingId'];

      this.training = this.trainingService.getTraining(this.trainingId).subscribe(res => {


        this.training = res;
        console.log(res);



      });


    });
  }
  updateTraining( c: any) {
    this.trainingService.updateTraining(c).subscribe(res => {

      this.router.navigate(['/training']);

      this.training = res;
      console.log(res);
  });
  }

  getAllTraining() {
    this.trainingService.getAllTraining().subscribe() ;

  }






}
