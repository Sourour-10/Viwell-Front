import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from '../Model/article';
import { ArticleService } from '../Service/Article/article-service';
import { ResponseService } from '../Service/Response/response-service';
import { SubjectService } from '../Service/Subject/subject-service';

@Component({
  selector: 'app-article-front',
  templateUrl: './article-front.component.html',
  styleUrls: ['./article-front.component.css']
})
export class ArticleFrontComponent implements OnInit {

  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;

  listResponses: any;
  listSubjects: any;
  listArticles: any;
  article!: Article;
  closeResult!: string;
  form: boolean = false;

  constructor(private articleService: ArticleService, private subjectService: SubjectService, private responseService: ResponseService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllArticles();
    this.getAllSubjects();
    this.getAllResponses();

    this.article ={
      articleId: null,
      text: null,
      subject:null,
      user:null,
      responses: null
    }
  }

  getAllArticles(){
    this.articleService.getAllArticles().subscribe(res => {this.listArticles = res;
      console.log("liste des articles",this.listArticles) ;
    })
  }

  getAllSubjects(){
    this.subjectService.getAllSubjects().subscribe(res => {this.listSubjects = res;
      console.log("liste des sujets",this.listSubjects) ;
    })
  }

  getAllResponses(){
    this.responseService.getAllResponses().subscribe(res => {this.listResponses = res;
      console.log("liste des reponses",this.listResponses) ;
    })
  }


  getArticlesSubject(id:any){
    this.listArticles= null;
    this.articleService.getAllArticlesSubject(id).subscribe(res => {this.listArticles = res;
      console.log("liste des articles",this.listArticles) ;
    })
  }

  getResponsesArticle(id:any){
    this.listResponses= null;
    this.responseService.getAllResponsesArticle(id).subscribe(res => {this.listResponses = res;
      console.log("liste des reponses",this.listResponses) ;
    })
  }
  
  react(id:any,responseId:any){
    
    this.responseService.react(id,responseId).subscribe() ;
  }

}
