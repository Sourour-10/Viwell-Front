import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ArticleComponent } from '../article/article.component';
import { Response } from '../Model/response';
import { ResponseService } from '../Service/Response/response-service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

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

  addResponse(s : any){
    
    this.responseService.addResponse(s).subscribe(()=>{
      this.getAllResponses();
      this.form = false ; 
    });
  }

  editResponse(s: any){

    this.responseService.editResponse(s).subscribe();
  }

  deleteResponse(subjectId: any){

    this.responseService.deleteResponse(subjectId).subscribe(()=> this.getAllResponses());
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
