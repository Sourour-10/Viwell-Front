import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/Model/Post';
import { Reclamation,ComplaintSubjects } from 'src/app/Model/Reclamation';
import { CommentService } from 'src/app/Service/Comment/comment.service';
import { PostServiceService } from 'src/app/Service/Post/post-service.service';
import { ReclamationService } from 'src/app/Service/Reclamation/reclamation.service';

@Component({
  selector: 'app-add-rreclamation',
  templateUrl: './add-rreclamation.component.html',
  styleUrls: ['./add-rreclamation.component.css'],
  providers: [DatePipe]
})
export class AddRreclamationComponent implements OnInit {

    currentDate = new Date();
  reclamation: Reclamation = new Reclamation();
  isAdded = false;
  
  @Input() ReportpostId : number;
  Reportpost : Post;

  constructor(private reclamationService: ReclamationService,private datePipe: DatePipe,private modalService: NgbModal,private postService: PostServiceService,private commentService :CommentService) { }

  ngOnInit(): void {
  }

  







/**
  onSubmit(){
    switch(this.reclamationForm.value.complaintSubject){
      case 'ReportPost':
        this.reclamation.complaintSubject = ComplaintSubjects.ReportPost;
      case 'ReportComment':
        this.reclamation.complaintSubject = ComplaintSubjects.ReportComment;
      case 'ReportEvent':
        this.reclamation.complaintSubject = ComplaintSubjects.ReportEvent;
      case 'ReportProfile':
        this.reclamation.complaintSubject = ComplaintSubjects.ReportProfile;

    }
    this.reclamation.date = this.reclamationForm.value.date;
    this.reclamation.content = this.reclamationForm.value.content;
    this.save();
  }

 *   save(){
    UserId:number,num:number,complaintSubject:string,Content:string
    this.reclamationService.addReclamation(1,1,this.reclamationForm.value.complaintSubject,this.reclamation.content)
                    .subscribe(collab=> {console.log(collab);
                      this.isAdded = true;
                    }, error=>console.log(error))
  }
  resetColabForm(){
    this.isAdded = false;
    this.collabForm.reset();
  }
 * 
 */


}
