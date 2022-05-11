import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Model/Post';
import { CommentService } from 'src/app/Service/Comment/comment.service';
import { PostServiceService } from 'src/app/Service/Post/post-service.service';
import { ReactfeedService } from 'src/app/Service/React/reactfeed.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  public productID: number;

  public postItem: any;
  public Ncomments:number;
  public Nlikes:number;
  public Nshares:number;

  productData: any;
  openC:boolean = false ;

  selectedFile: File;
    retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message: string;
    imageName: any;
    imageUrl: string;
    isreacted:boolean=false;
    reaction:any;

  constructor(private postService: PostServiceService,private commentService: CommentService,private route: ActivatedRoute,private reactfeedService:ReactfeedService,private modalService: NgbModal , private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productID = params?.postId
  })


  this.postService.getNcomments(this.productID).subscribe((data) => {
    this.Ncomments = data;
 })

  this.postService.getNlikes(this.productID).subscribe((data) => {
    this.Nlikes = data;
  })

  this.postService.getNshares(this.productID).subscribe((data) => {
    this.Nshares = data;
 })


  this.postService.getPostById(this.productID).subscribe((data) => {
    this.postItem = data;
 })


 this.getImage();
 this.getMyEmoji();
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get('/api/Post/getPhotoByPost/'+  this.productID,{ responseType: 'text' })
      .subscribe(
        res => {
  
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte ;
  
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.imageUrl= '/api/Post/getPhotoByPost/'+this.productID;
  
        }
      );
  }
  refresh(): void {
    window.location.reload();
}
getMyEmoji(){
  this.reactfeedService.getMyEmoji(this.productID).subscribe((data) => {
    console.log("reacccccccttttttt: "+data);
    this.reaction = data;
  })

}



}
