import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from '../Model/subject';
import { SubjectService } from '../Service/Subject/subject-service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  listSubjects: any;
  subject!: Subject;
  closeResult!: string;
  form: boolean = false;

  constructor(private subjectService: SubjectService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllSubjects();


    this.subject ={
    subjectId: null,
    name: null,
    approved:null,
    articles:null
    }
  }

  getAllSubjects(){
    this.subjectService.getAllSubjects().subscribe(res => {this.listSubjects = res;
      console.log("liste des sujets",this.listSubjects) ;
    })
  }

  addSubject(s : any){
    this.subjectService.addSubject(s).subscribe(()=>{
      this.getAllSubjects();
      this.form = false ; 
    });
  }

  editSubject(s: any){

    this.subjectService.editSubject(s).subscribe();
  }

  deleteSubject(subjectId: any){

    this.subjectService.deleteSubject(subjectId).subscribe(()=> this.getAllSubjects());
  }

  approuverSubject(s: any,subjectId: any){
    this.subjectService.approuverSubject(s,subjectId).subscribe(()=>{
      this.getAllSubjects(); 
    });
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
