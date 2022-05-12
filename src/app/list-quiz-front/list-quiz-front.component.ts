import { Component, OnInit } from '@angular/core';
import {Quiz} from '../Model/quiz';
import {QuizService} from '../Service/Quiz/quiz.service';
import {Question} from '../Model/Question';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-quiz-front',
  templateUrl: './list-quiz-front.component.html',
  styleUrls: ['./list-quiz-front.component.css']
})
export class ListQuizFrontComponent implements OnInit {

 id: any;
  listQuiz: any ;
  form = true;
  quiz !: Quiz  ;
  closeResult!: string ;


  constructor( private quizService: QuizService, private route: ActivatedRoute  ) { }

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






}
