import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comment } from 'src/app/Model/Comment';
import { Reclamation } from 'src/app/Model/Reclamation';
import { CommentService } from 'src/app/Service/Comment/comment.service';
import { ReclamationService } from 'src/app/Service/Reclamation/reclamation.service';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
  @Input() postCommentedId:number;
  ListComment : Comment[];
  ListReplies : Comment[];
  recSubject  = ['ReportPost', 'ReportComment', 'ReportEvent','ReportProfile'];
  contentReportList  = ['Nudity', 'Violence', 'Harassment','Suicide or self-harm','False information', 'Undesirable content', 'Unauthorized sales','hate speech', 'Terrorism', 'Other'];
  report: Reclamation = new Reclamation();
  @ViewChild('closebutton') closebutton;
  ReportComment: Comment;
  constructor(private commentService: CommentService,private reclamationService: ReclamationService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.commentService.getComments(this.postCommentedId).subscribe(
      (data: Comment[]) => this.ListComment = data);
    
  }
  getReplies(commentId:number){
    this.commentService.getRepliesByComment(commentId).subscribe(
      (data: Comment[]) => this.ListReplies = data);
  }
  reclamationForm = new FormGroup({
    commentId: new FormControl({value:'', disabled:true}),
    complaintSubject: new FormControl({value:'', disabled:true}),
    contentReport: new FormControl(''),  
  });
  openVerticallyCentered(content,commentId:number) {
    this.modalService.open(content, { centered: true });
        // Get user data for the selected user
        this.commentService.getCommentById(commentId)
        .subscribe(responseData=> {
          this.ReportComment = responseData;
          
          this.prepareUpdateForm();
        });
  }
 
    prepareUpdateForm(){
      this.reclamationForm.setValue({
        commentId: this.ReportComment.commentId,
        complaintSubject: 'ReportComment',
        contentReport: 'Please select a reason',
      });
    }
  
    onSubmit(){
      this.report.complaintSubject = this.reclamationForm.value.complaintSubject;
      this.report.content = this.reclamationForm.value.contentReport;
        this.reclamationService.addReclamation(this.ReportComment.commentId,'ReportComment', this.report.content).subscribe(responseDate=>{
          // to close the modal
          this.closebutton.nativeElement.click();
          // Get the updated list
        }, 
        error=> console.log(error));

    }

}
