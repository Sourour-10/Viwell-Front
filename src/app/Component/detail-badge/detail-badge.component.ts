import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Badge } from 'src/app/Model/Badge';
import { AdduserService } from 'src/app/Service/User/adduser.service';

@Component({
  selector: 'app-detail-badge',
  templateUrl: './detail-badge.component.html',
  styleUrls: ['./detail-badge.component.css'],
  styles: [`
  .dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
  }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
`]
})
export class DetailBadgeComponent implements OnInit {

  @Input()badge : Badge;
  users=null;

  openC:boolean = false ;
selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  imageUrl: string;
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

  closeResult: string;
  //@Output() requested=new EventEmitter<String>();

  constructor(private service:AdduserService, private modalService: NgbModal , private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
   
  }
  


  
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  public onImageUpload(event) {
    this.uploadedImage = event.target.files[0];
  }
  uploadUserProfilePicture() {
  const imageFormData= new FormData();
  imageFormData.append('photo',this.uploadedImage)
   
  this.http.post(`http://localhost:8089/Photo/BadgeWithPhoto/`+this.badge.badgeId, imageFormData)
  .subscribe((response) => { 
    if (response=== 200) {
      this.postResponse = response;
      this.successResponse = this.postResponse.body.message;
      window.location.reload();
      this.router.navigateByUrl("/listBadges");
    } else {
      this.successResponse = 'Image not uploaded due to some error!';
    }
  }
  );
  }





}
