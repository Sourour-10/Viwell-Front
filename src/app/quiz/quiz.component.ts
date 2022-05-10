import { Component, OnInit } from '@angular/core';
import {Training} from '../Model/Training';
import {TrainingService} from '../Service/Training/training.service';
import {Quiz} from '../Model/Quiz';
import {QuizService} from '../Service/Quiz/quiz.service';
import {Question} from '../Model/Question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  listQuiz: any ;
  form = true;
  quiz !: Quiz  ;
  closeResult!: string ;


  constructor( private quizService: QuizService  ) { }

  ngOnInit(): void {

    this.quizService.getAllQuiz().subscribe(res => {
          console.log(res);
          this.listQuiz = res;
        }
    );


      this.quiz = {
      id : null,
      quizName: null,
      subject: null,
      instructions: null,
          dateTimeFrom: null,
          dateTimeTo: null,
          durationInMin: null,
      maxMarks: null,

    };
  }

  getAllQuiz() {
    this.quizService.getAllQuiz().subscribe(res => this.listQuiz = res );

  }
  addQuiz( c: any) {
    this.quizService.addQuiz(c)
        .subscribe(() => {
          this.getAllQuiz();
          this.form = false;

        });
  }
    addQuestionForQuiz(question: Question ) {

    this.quizService.addQuestionForQuiz(question)
        .subscribe(() => {
          this.getAllQuiz();
          this.form = false;

        });


  }


  deleteQuiz( idQuiz: any) {
    this.quizService.deleteQuiz(idQuiz).subscribe(() => this.getAllQuiz());
  }

}
