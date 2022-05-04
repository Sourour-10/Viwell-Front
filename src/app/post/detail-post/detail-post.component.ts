import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Model/Post';
import { PostServiceService } from 'src/app/Service/Post/post-service.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  public id: number;

  public postItem: Post = null;
  productID: any;
  productData: any;
  constructor(private postService: PostServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params?.postId
  })

  this.postService.getPostById(this.id).subscribe(
    (data: Post) => this.postItem = data);

  }


}
