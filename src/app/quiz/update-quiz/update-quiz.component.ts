import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../Model/quiz';
import {QuizService} from '../../Service/Quiz/quiz.service';
import {ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  listQuiz: any ;
  quizId: any;
  form = true;
  quiz: any  ;
  closeResult!: string ;
  constructor( private quizService: QuizService,  private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['quizId'];

this.quizService.getQuizById(this.quizId).subscribe(res => {


  this.quiz = res;
  console.log(res);


});

  }

  updateQuiz(quiz: any) {
    this.quizService.updateQuiz(quiz).subscribe(res => {

      this.router.navigate(['/quiz']);

      this.quiz = res;
      console.log(res);


    });

  }

}
