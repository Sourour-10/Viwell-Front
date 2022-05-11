import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from '../Model/Post';
import { React } from '../Model/React';
import { Reaction } from '../Model/React';
import { Reclamation } from '../Model/Reclamation';
import { PostServiceService } from '../Service/Post/post-service.service';
import { ReactfeedService } from '../Service/React/reactfeed.service';
import { ReclamationService } from '../Service/Reclamation/reclamation.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  ListPost: Post[];
  ListPost2: Post[];
  ListReact : string[];
  DateAujourdhui:  Date = new Date() ;
  react: React ;
  pathReact: string;
  post : any ;
  reaction : any;
  recSubject  = ['ReportPost', 'ReportComment', 'ReportEvent','ReportProfile'];
  contentReportList  = ['Nudity', 'Violence', 'Harassment','Suicide or self-harm','False information', 'Undesirable content', 'Unauthorized sales','hate speech', 'Terrorism', 'Other'];
  report: Reclamation = new Reclamation();
  Reportpost: Post;
  @ViewChild('closebutton') closebutton;


  constructor(private postService: PostServiceService,private router: Router,private reactfeedService:ReactfeedService,private reclamationService: ReclamationService,private modalService: NgbModal) {
    


   }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data: Post[]) => this.ListPost = data);
    //get react of the user connected
    

  }
  reclamationForm = new FormGroup({
    postId: new FormControl({value:'', disabled:true}),
    complaintSubject: new FormControl({value:'', disabled:true}),
    contentReport: new FormControl(''),  
  });
  openVerticallyCentered(content,postId:number) {
    this.modalService.open(content, { centered: true });
        // Get user data for the selected user
        this.postService.getPostById(postId)
        .subscribe(responseData=> {
          this.Reportpost = responseData;
          
          this.prepareUpdateForm();
        });
  }
 
    prepareUpdateForm(){
      this.reclamationForm.setValue({
        postId: this.Reportpost.postId,
        complaintSubject: 'ReportPost',
        contentReport: 'Please select a reason',
      });
    }
  
    onSubmit(){
      this.report.complaintSubject = this.reclamationForm.value.complaintSubject;
      this.report.content = this.reclamationForm.value.contentReport;
        this.reclamationService.addReclamation(this.Reportpost.postId,'ReportPost', this.report.content).subscribe(responseDate=>{
          // to close the modal
          this.closebutton.nativeElement.click();
          // Get the updated list
        }, 
        error=> console.log(error));

    }
}


