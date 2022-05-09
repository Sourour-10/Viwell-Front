import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostServiceService } from 'src/app/Service/Post/post-service.service';

@Component({
  selector: 'app-addphotopost',
  templateUrl: './addphotopost.component.html',
  styleUrls: ['./addphotopost.component.css']
})
export class AddphotopostComponent implements OnInit {

  
  uploadedImage: File;
  postResponse: any;
  successResponse: string;
  @Input() PostId:number;
  constructor(private postService: PostServiceService,private modalService: NgbModal,private http:HttpClient,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  public onImageUpload(event) {
    this.uploadedImage = event.target.files[0];
  }
  uploadPostPicture() {
  const imageFormData= new FormData();
  imageFormData.append('photo',this.uploadedImage)
   
  this.http.post(`/api/Photo/upload/image/${this.PostId}`, imageFormData)
  .subscribe((response) => { 
    if (response=== 200) {
      this.postResponse = response;
      this.successResponse = this.postResponse.body.message;
      window.location.reload();
      this.router.navigateByUrl(`/postdetail/${this.PostId}`);
    } else {
      this.successResponse = 'Image not uploaded due to some error!';
    }
  }
  );
  }

}