import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from '../Model/article';
import { Response } from '../Model/response';
import { ResponseService } from '../Service/Response/response-service';

@Component({
  selector: 'app-responsetoarticle',
  templateUrl: './responsetoarticle.component.html',
  styleUrls: ['./responsetoarticle.component.css']
})
export class ResponsetoarticleComponent implements OnInit {

  @Input() article:Article;
  listResponses: any;
  response!: Response;
  closeResult!: string;
  form: boolean = false;

  constructor(private responseService: ResponseService ,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllResponses();

    this.response ={
      responseId: null,
      text: null,
      Nlikes:null,
      dateCreation:null,
      article:null
    }
  }

  getAllResponses(){
    this.responseService.getAllResponses().subscribe(res => {this.listResponses = res;
      console.log("liste des reponses",this.listResponses) ;
    })
  }

  addResponse(s : any, articleId:any){
    
    this.responseService.addResponse(s,articleId).subscribe(()=>{
      this.getAllResponses();
      this.form = false ; 
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult =` closed with: ${result}`;
    }, (reason) => {
      this.closeResult =` Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
      
    }
  }

}
