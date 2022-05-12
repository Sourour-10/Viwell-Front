import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../Model/quiz';
import {QuizService} from '../../Service/Quiz/quiz.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  listQuiz: any ;
  form = true;
  quiz !: Quiz  ;
  closeResult!: string ;

  constructor(private quizService: QuizService ,  private route: ActivatedRoute , private router: Router ) { }

  ngOnInit(): void {
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
    goToQuizList() {
        this.router.navigate(['/quiz']);
    }

  addQuiz( c: any) {
    this.quizService.addQuiz(c)
        .subscribe(() => {
          this.getAllQuiz();


         this.goToQuizList();


        });
  }




}
