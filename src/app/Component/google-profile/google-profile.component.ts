import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { AdduserService } from 'src/app/Service/User/adduser.service';
import { TokenStorageService } from 'src/app/Service/User/token-storage.service';

@Component({
  selector: 'app-google-profile',
  templateUrl: './google-profile.component.html',
  styleUrls: ['./google-profile.component.css']
})
export class GoogleProfileComponent implements OnInit {

  userInfo: User = new User();

  name:string;
  user :User;
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
  
  public userDetails;
  
      constructor(private http: HttpClient, private service:AdduserService, private router: Router, private token :TokenStorageService) { }
  
      ngOnInit() {
           const storage=localStorage.getItem('google_auth');
          if (storage){
            this.userDetails=JSON.parse(storage);
          }else{this.Signout()}
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
