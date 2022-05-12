import { Component, OnInit } from '@angular/core';
import {Quiz} from '../Model/quiz';
import {QuizService} from '../Service/Quiz/quiz.service';
import {ActivatedRoute} from '@angular/router';
import {Training} from '../Model/training';
import {TrainingService} from '../Service/Training/training.service';

@Component({
  selector: 'app-training-front',
  templateUrl: './training-front.component.html',
  styleUrls: ['./training-front.component.css']
})
export class TrainingFrontComponent implements OnInit {
  id: any;
  listTraining: any ;


  closeResult!: string ;


  constructor( private trainingService: TrainingService, private route: ActivatedRoute  ) { }

  ngOnInit(): void {

    this.trainingService.getAllTraining().subscribe(res => {
          console.log(res);

          this.listTraining = res;
        }
    );



  }




}
