import { Component, OnInit } from '@angular/core';
import {QuizService} from '../Service/Quiz/quiz.service';
import {Quiz} from '../Model/quiz';
import {ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-welcome-quiz',
  templateUrl: './welcome-quiz.component.html',
  styleUrls: ['./welcome-quiz.component.css']
})
export class WelcomeQuizComponent implements OnInit {
   quiz: any;
   quizId: any;



  constructor(private quizService: QuizService ,  private route: ActivatedRoute , private router: Router) {  }

  ngOnInit(): void {
      this.quizId = this.route.snapshot.params['quizId'];
      console.log(this.quizId);
    this.quizService.getQuizById(this.quizId).subscribe(res => {


        this.quiz = res;
        console.log(res);


        }

    );


  }

}
