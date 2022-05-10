import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/Service/Comment/comment.service';
import { PostServiceService } from 'src/app/Service/Post/post-service.service';
import { Comment } from 'src/app/Model/Comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() postCommentedId:number;
  comment : Comment = new Comment();
  comments : Comment[];
  isAdded = false;
  currentDate = new Date();
  commentForm: FormGroup;
  constructor(private commentService: CommentService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }
  save(){
    this.commentService.addComment(this.comment,this.postCommentedId,1)
                    .subscribe(comment=> {console.log(comment);
                      this.isAdded = true;
                    }, error=>console.log(error))
  }
  onSubmit(){
    this.comment.text = this.commentForm.value.text;
    //this.comment.date = this.currentDate;
    this.save();
  }


  resetCommentForm(){
    this.isAdded = false;
    this.commentForm.reset();
  }


}
