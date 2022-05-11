import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from '../Model/article';
import { Response } from '../Model/response';
import { Subject } from '../Model/subject';
import { ArticleService } from '../Service/Article/article-service';
import { SubjectService } from '../Service/Subject/subject-service';
import { SubjectComponent } from '../subject/subject.component';

@Component({
  providers:[SubjectComponent],
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  
  
  listSubjects: any;
  listArticles: any;
  article!: Article;
  closeResult!: string;
  form: boolean = false;
  sujetId:any ;
  sujetForm: FormGroup;


  constructor(private articleService: ArticleService, private subjectService: SubjectService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllArticles();
    this.getAllSubjects();

    this.sujetForm = new FormGroup({
      sujet: new FormControl('', [Validators.required]),   
    });
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

  onSubmit(){
    //this.sujetId = this.sujetForm.value.subject;
    console.log("Onsubmit sujetid = " +this.sujetId)

    this.addArticle(this.article,this.sujetId);
   
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.sujetId = event.target.value;
  }

  addArticle(a : any,sujet:any){
    console.log("Sujet id = " +this.sujetId)
    var subject = this.subjectService.getSubjectById(this.sujetId);
    a.subject=subject ; 
    console.log("Sujet= " +subject)

      this.articleService.addArticle(a,sujet).subscribe(()=>{
      this.getAllArticles();
      this.form = false ; 
    });
  }

  editArticle(a: any){

    this.articleService.editArticle(a).subscribe();
  }

  deleteArticle(articleId: any){

    this.articleService.deleteArticle(articleId).subscribe(()=> this.getAllArticles());
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
    closeForm(){
  
    }
    cancel(){
      this.form = false;
    }
  }



