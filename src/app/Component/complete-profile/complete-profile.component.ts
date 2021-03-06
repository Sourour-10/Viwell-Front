import { DatePipe } from '@angular/common';
import { HttpErrorResponse, HttpEventType , HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, first, map, of } from 'rxjs';
import { User } from 'src/app/Model/User';
import { AdduserService } from 'src/app/Service/User/adduser.service';
import { TokenStorageService } from 'src/app/Service/User/token-storage.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css'],
  providers: [DatePipe]
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
users:User[];

userDetails:User;


  
 // file: File = {
   // data: null,
    //inProgress: false,
    //progress: 0
  //};

  constructor(private modalService: NgbModal, private service:AdduserService ,  private route: ActivatedRoute,
    private router: Router,private http:HttpClient, private tokenStorage:TokenStorageService, private datePipe: DatePipe) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.service.getUser().subscribe(res=>{
        this.user=res;
        console.log("oooooooo",+this.user)
        this.currentUser.idPhoto==8;
        this.prepareUpdateForm();
    })
     
   
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
    this.service.getUser().subscribe(res=>{
      this.user=res;
      this.currentUser().idPhoto===8;
      console.log("oooooooo",+this.user)
      console.log("photooo",this.currentUser().idPhoto );
      this.prepareUpdateForm();})
 
  }

 
  userUpdateForm = new FormGroup({
    userId: new FormControl({value:'', disabled:true}),
    userName: new FormControl(''),  
    mail: new FormControl('',  Validators.email),   
    lastName: new FormControl(''), 
    firstName: new FormControl(''),   
    birthdate: new FormControl(''),
    cin: new FormControl(''),
    phoneNumber: new FormControl('')
  

  });



  prepareUpdateForm(){
    this.userUpdateForm.setValue({
      userId: this.user.userId,
      userName: this.user.userName,
      mail: this.user.mail,
      lastName: this.user.lastName,
      firstName: this.user.firstName,
      birthdate: this.datePipe.transform(this.user.birthdate, 'yyyy-MM-dd'),
      cin: this.user.cin,
      phoneNumber: this.user.phoneNumber,
      idPhoto:this.currentUser().idPhoto,
     
      password:this.user.password

   
      
    });
  }

 
  onSubmit(){
   
    // To get data from a disabled input element
   // this.user.collaborationId = this.userUpdateForm.getRawValue().id;
  
    this.user.mail = this.userUpdateForm.value.mail;
    this.user.userName = this.userUpdateForm.value.userName;
    this.user.firstName = this.userUpdateForm.value.firstName; 
    this.user.lastName = this.userUpdateForm.value.lastName;
    this.user.birthdate = this.userUpdateForm.value.birthdate;
    this.user.phoneNumber = this.userUpdateForm.value.phoneNumber;
    this.user.cin = this.userUpdateForm.value.cin;
 
    
    //console.log("USER for update"+ user.userId);
    this.service.updateU(this.user).subscribe(rep=>{
      this.user.idPhoto===8;
      this.getUser();
    
    })
    window.location.reload();
    console.log("useeeeeeer",this.user);
}

 // updateuser() {
  //  this.service.updateuser( this.user)
    //  .subscribe(user=>this.user=user)
    //}
  
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

private saveUserData(data){
  this.tokenStorage.saveToken(data.accessToken);
  this.tokenStorage.saveUser(data);
  
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
