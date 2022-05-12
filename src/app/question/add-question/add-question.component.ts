import { Component, OnInit } from '@angular/core';
import {Question} from '../../Model/Question';
import {QuizService} from '../../Service/Quiz/quiz.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  quizId: any;

  question !: Question  ;


  constructor(private quizService: QuizService ,  private route: ActivatedRoute , private router: Router ) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['quizId'];

    this.question = {
      id: null,
      quizId: this.quizId,
      question: null,
      option1: null,
      option2: null,
      option3: null,
      option4: null,
      correctOption: null,


    };


  }


  addQuestion( c: any) {
    this.quizService.addQuestionForQuiz(c)
        .subscribe(() => {


          this.goToQuestionList();


        });
  }


  goToQuestionList() {
    this.router.navigate(['quiz/questions/', this.quizId ]);
  }



}
