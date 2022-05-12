import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { SignupInfo } from 'src/app/Model/SignupInfo';
import { User } from 'src/app/Model/User';
import { AdduserService } from 'src/app/Service/User/adduser.service';
import { TokenStorageService } from 'src/app/Service/User/token-storage.service';

@Component({
  selector: 'app-google-profile',
  templateUrl: './google-profile.component.html',
  styleUrls: ['./google-profile.component.css'],
  providers: [DatePipe]
})
export class GoogleProfileComponent implements OnInit {

  userInfo: User = new User();

  name:string;
 // user :User;
  currentUser: any;
  openC:boolean = false ;
  selectedFile: File;
    retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message: string;
    imageName: any;
    imageUrl: string;
    imageUrll: string;
  
    isEmployee = true ;
    user: SocialUser;
    signupInfo!: SignupInfo;
    
  
  public userDetails;

      constructor(private http: HttpClient, private service:AdduserService, private router: Router, private token :TokenStorageService, private authService: SocialAuthService, private datePipe: DatePipe) { }
     //date:Date;
     
     //date= this.datePipe.transform("1997-09-12", 'yyyy-MM-dd');
      ngOnInit() {
       
          const storage=localStorage.getItem('google_auth');
          if (storage){
            this.userDetails=JSON.parse(storage);
          }else{this.Signout()}
          this.authService.authState.subscribe(user => {
            this.user = user;
            
            this.signupInfo= new SignupInfo(this.user.name,"null", this.user.lastName, this.user.firstName,this.user.email,123123,
           new Date(),
           23654789)
      this.service.signUp(this.signupInfo).subscribe();
            
          });
        }
      
       
  openChat() {
    if (this.openC ==true)
    this.openC=false ;
    else
    this.openC=true ;
  }

  Signout():void{
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }


  


  
  

}
