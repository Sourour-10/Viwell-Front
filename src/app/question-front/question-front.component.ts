import { Component, OnInit } from '@angular/core';
import {QuizService} from '../Service/Quiz/quiz.service';

@Component({
  selector: 'app-question-front',
  templateUrl: './question-front.component.html',
  styleUrls: ['./question-front.component.css']
})
export class QuestionFrontComponent implements OnInit {
  public questionList: any;
  public currentQuestion = 0;
  public points = 0;
  counter = 60;

  constructor(private quizService: QuizService ) {  }

  ngOnInit(): void {
    this.quizService.getQuestionsForQuiz(1).subscribe(res => {

          this.questionList = res;
          console.log(res);
        }

    );

    console.log(this.questionList);
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {

    this.currentQuestion--;
  }



}
