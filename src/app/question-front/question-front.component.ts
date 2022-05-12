import { Component, OnInit } from '@angular/core';
import {QuizService} from '../Service/Quiz/quiz.service';
import {UserResponse} from '../Model/UserResponse';
import {Question} from '../Model/Question';
import {interval} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question-front',
  templateUrl: './question-front.component.html',
  styleUrls: ['./question-front.component.css']
})
export class QuestionFrontComponent implements OnInit {
  public questionList: any;
  public userResponseList:  UserResponse [];
  public reponseA = 'A';
  public reponseB = 'B';
  public reponseC = 'C';
  public reponseD = 'D';
  public response: any;
  public userResponse: UserResponse;
  public currentQuestion = 0;
  public num = 0;
  interval$: any;
  public progress = '0';

  public points = 0;
  public correctOption = 0;
  public incorrectOption = 0;
  counter = 60;
  isQuizComplete = false;
  quiz: any;
  quizId: any;

  responseUser;

  constructor(private quizService: QuizService ,  private route: ActivatedRoute) {  }

  ngOnInit(): void {


    this.quizId = this.route.snapshot.params['quizId'];

    this.quizService.getQuizById(this.quizId).subscribe(res => {


          this.quiz = res;
          console.log(res);


        }

    );



    this.quizService.getQuestionsForQuiz( this.quizId).subscribe(res => {
          this.startCounter();

          this.questionList = res;

          console.log(res);

        }



    );






    console.log(this.questionList);
  }
  nextQuestion() {
    this.currentQuestion++;
    this.num++;
    this.counter = 60;
  }
  previousQuestion() {

    this.currentQuestion--;
  }

  addAnswer(question: Question, answer: any) {

    if (this.currentQuestion === (this.questionList.length - 1)) {
      if (this.correctOption > this.incorrectOption) {
          this.quizService.exportPdf(this.quizId, 1);
      }

      this.quizService.evaluateAndUpdateResult(this.quizId, 1);

      console.log(this.currentQuestion);
      console.log(this.questionList.length);
      this.isQuizComplete = true;
      this.stopCounter();
      this.quizService.evaluateAndUpdateResult(this.quizId, 1);
    }

    const responseuser = new UserResponse();
    responseuser.quizId = question.quizId;
    responseuser.questionId = question.id;
    responseuser.optionSelected = answer;
    responseuser.userId = 1;
    responseuser.TrainingId = 0;
    responseuser.timeTakenInSec = 60 - this.counter;


    console.log(question);



  this.quizService.uploadAnswer(responseuser).subscribe(res => console.log(res));
  if (question.correctOption === answer ) {
    this.points += 10;
    this.nextQuestion();
    this.correctOption++;
    this.getProgressPercent();
  } else {
    this.nextQuestion();
    this.incorrectOption++;
    this.getProgressPercent();
  }

    console.log(question.toString() + 'aaaaaaaaaaaaa===========');

    console.log(responseuser);
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.counter--;
      if (this.counter === 0) {
        this.nextQuestion();
        this.counter = 60;
      }

    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000 );
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

  }





}
