import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentService } from 'src/app/Service/Comment/comment.service';
import { Comment } from 'src/app/Model/Comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  currentDate = new Date();
  commentForm: FormGroup;
  isAdded = false;
  comment :Comment = new Comment();
  constructor(private commentService: CommentService  , private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.refreshPost();
    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit(){
    this.comment.text = this.postForm.value.text;
    this.comment.date = this.currentDate;
    this.save();
  }

  save(){
    this.postService.addPost(this.post)
                    .subscribe(post=> {console.log(post);
                      this.isAdded = true;
                    }, error=>console.log(error))
  }
  resetPostForm(){
    this.isAdded = false;
    this.postForm.reset();
  }
  refreshPost() {
    this.postService.getPosts()
      .subscribe(data => {
        console.log(data)
        this.posts=data;
      })      
 
  }

}
