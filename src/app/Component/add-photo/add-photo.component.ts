import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdduserService } from 'src/app/Service/User/adduser.service';
import { TokenStorageService } from 'src/app/Service/User/token-storage.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  form: any ={};
  id: number;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  profilePicture:File
  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  base64Data:any;
  closeResult: string;

  constructor(private modalService: NgbModal, private service:AdduserService ,  private route: ActivatedRoute,
    private router: Router,private http:HttpClient
    , private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  public get currentUser(): any{
    return this.tokenStorage.getUser;
  }
  public onImageUpload(event) {
    this.uploadedImage = event.target.files[0];
  }
  uploadUserProfilePicture() {
  const imageFormData= new FormData();
  imageFormData.append('photo',this.uploadedImage)
   
  this.http.post(`http://localhost:8089/Photo/upload/photo/${this.currentUser().id}`, imageFormData)
  .subscribe((response) => { 
    if (response=== 200) {
      this.postResponse = response;
      this.successResponse = this.postResponse.body.message;
      window.location.reload();
      this.router.navigateByUrl("/user-profile");
    } else {
      this.successResponse = 'Image not uploaded due to some error!';
    }
  }
  );
  }

}
