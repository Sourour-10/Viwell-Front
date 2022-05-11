import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/Model/Post';
import { PostServiceService } from 'src/app/Service/Post/post-service.service';

@Component({
  selector: 'app-share-post',
  templateUrl: './share-post.component.html',
  styleUrls: ['./share-post.component.css']
})
export class SharePostComponent implements OnInit {

  @Input() postToshareId:number;
  shareForm: FormGroup;
  public description:string;
  isShared:boolean = false ;
  share:Post = new Post();
  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
    this.shareForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }
  refresh(): void {
    window.location.reload();
}

  sharedescription(description:string){
    return description;

  }
  onSubmitSharing(){
    this.share.text = this.shareForm.value.text;

    this.sharepost();
  }
  sharepost(){
    this.postService.sharepost(this.postToshareId,this.share).subscribe(post=> {console.log(post);
      this.isShared = true;
    }, error=>console.log(error));

    
  }

}
