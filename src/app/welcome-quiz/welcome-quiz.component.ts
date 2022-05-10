import { Component, OnInit } from '@angular/core';
import {QuizService} from '../Service/Quiz/quiz.service';

@Component({
  selector: 'app-welcome-quiz',
  templateUrl: './welcome-quiz.component.html',
  styleUrls: ['./welcome-quiz.component.css']
})
export class WelcomeQuizComponent implements OnInit {
  public quiz: any;



  constructor(private quizService: QuizService ) {  }

  ngOnInit(): void {
    this.quizService.getQuizById(1).subscribe(res => {


        this.quiz = res;
        console.log(res);


        }

    );


  }

}
