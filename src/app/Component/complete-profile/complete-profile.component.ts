import { HttpErrorResponse, HttpEventType , HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, first, map, of } from 'rxjs';
import { User } from 'src/app/Model/User';
import { AdduserService } from 'src/app/Service/User/adduser.service';
import { TokenStorageService } from 'src/app/Service/User/token-storage.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css']
})
export class CompleteProfileComponent implements OnInit {
  form: any ;
  id: number;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  closeResult = '';
  profilePicture:File
  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  base64Data:any;
user:User;
users:Array<User>=[];

userDetails:User;
  
 // file: File = {
   // data: null,
    //inProgress: false,
    //progress: 0
  //};

  constructor(private modalService: NgbModal, private service:AdduserService ,  private route: ActivatedRoute,
    private router: Router,private http:HttpClient, private tokenStorage:TokenStorageService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  
}


  ngOnInit() {
   // this.user = new User()
   this.getUser();
 
  }

  updateuser() {
    this.service.updateuser( this.user)
      .subscribe(user=>this.user=user)
    }
  
 // get f() { return this.form.controls; }

  public updateUser() {
    this.service.updateuser( this.user)
        .pipe(first())
        .subscribe({
         
            next: () => {

              console.log("helooooooo",this.user)
             //   this.alertService.success('Update successful', { keepAfterRouteChange: true });
             console.log("updated");
                this.router.navigate(['/user-profile'], { relativeTo: this.route });
            },
            error: error => {
               // this.alertService.error(error);
               console.log('erreuuuur')
                this.loading = false;
            }
        });
}
/*uploadFile() {
  const formData = new FormData();
  formData.append('file', this.file.data);
  this.file.inProgress = true;

  this.service.uploadProfileImage(formData).pipe(
    map((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          this.file.progress = Math.round(event.loaded * 100 / event.total);
          break;
        case HttpEventType.Response:
          return event;
      }
    }),
    catchError((error: HttpErrorResponse) => {
      this.file.inProgress = false;
      return of('Upload failed');
    })).subscribe((event: any) => {
      if(typeof (event) === 'object') {
        this.form.patchValue({profileImage: event.body.profileImage});
      }
    })
}*/
public get currentUser(): any{
  return this.tokenStorage.getUser;
}
//Uplodad photo
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
  } else {
    this.successResponse = 'Image not uploaded due to some error!';
  }
}
);
}

viewImage() {
  this.http.get(`http://localhost:8089/User/getPhotoUser/${this.currentUser().id}` )
    .subscribe(
      res => {
        this.postResponse = res;
        console.log("anaas"+res)

        this.base64Data = this.postResponse.picByte
        this.dbImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
    );
}


getUser(){
  this.service.getUser().subscribe(res=>{
    this.userDetails=res;
  })
}
}
