import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/Service/Comment/comment.service';
import { PostServiceService } from 'src/app/Service/Post/post-service.service';

@Component({
  selector: 'app-switchsubject-rec',
  templateUrl: './switchsubject-rec.component.html',
  styleUrls: ['./switchsubject-rec.component.css']
})
export class SwitchsubjectRecComponent implements OnInit {

  constructor(private postServiceService:PostServiceService, private commentService:CommentService) { }
  recSubject  = ['ReportPost', 'ReportComment', 'ReportEvent','ReportProfile'];
  subjectForm: FormGroup;
  RecSubject:string;
  ListObjetdeRec:any;
  isAdded:boolean = false;
  ngOnInit(): void {

    this.subjectForm = new FormGroup({
      complaintSubject: new FormControl(''), 
 

    });

  }
  onSubmit(){

    //this switch trying to get the objects after to reach the id == num 
    switch(this.subjectForm.value.complaintSubject){
      case 'ReportPost':
        this.ListObjetdeRec= this.postServiceService.getPosts();
      case 'ReportComment':
        this.ListObjetdeRec = this.commentService.getAllComments();
      case 'ReportEvent':
        //a modifier !!!!!!!!!!!!!!!!!
        this.ListObjetdeRec = this.commentService.getAllComments();
      case 'ReportProfile':
        //a modifier !!!!!!!!!!!!!!!!!
        this.ListObjetdeRec = this.commentService.getAllComments();

    }
    this.RecSubject = this.subjectForm.value.complaintSubject;
  }

}
