import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/Model/Post';
import { PostServiceService } from 'src/app/Service/Post/post-service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [DatePipe]
})
export class AddPostComponent implements OnInit {

  post : Post = new Post();
  posts : Post[];
  isAdded = false;
  constructor(private postService: PostServiceService, private datePipe: DatePipe) { }
  currentDate = new Date();
  postForm: FormGroup;
  ngOnInit(): void {
    this.refreshPost();
    this.postForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }
  onSubmit(){
    this.post.text = this.postForm.value.text;
    this.post.date = this.currentDate;
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
