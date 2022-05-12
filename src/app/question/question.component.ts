import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TrainingService} from '../Service/Training/training.service';
import {QuizService} from '../Service/Quiz/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  quizId: any;
  listQuestions: any;
  quiz: any;

  constructor(private route: ActivatedRoute , private quizService: QuizService , private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.quizId = params['quizId'];

      this.quiz = this.quizService.getQuizById(this.quizId).subscribe(res => {


        this.quiz = res;
        console.log(res);



      });
      this.listQuestions = this.quizService.getQuestionsForQuiz(this.quizId).subscribe(res => {


        this.listQuestions = res;
        console.log(res);



      });




    });




  }




  assign() {
    this.quizService.assignQuizToUsers(this.quizId);


  }

}
