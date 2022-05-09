import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEventListenerOptions } from 'rxjs/internal/observable/fromEvent';
import { User } from '../Model/User';
import { AdduserService } from '../Service/User/adduser.service';
import { TokenStorageService } from '../Service/User/token-storage.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

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



    constructor(private http: HttpClient, private service:AdduserService, private router: Router, private token :TokenStorageService) { }

    ngOnInit() {
        this.currentUser = this.token.getUser();
       

        this.getImage(this.currentUser.idPhoto) ;
        this.getUserImage();
        
      }
      public get currentuser(): any{
        return this.token.getUser;
      }
       logout(): void {
        this.service.logout();
        this.router.navigateByUrl('/login');
      }
    
openChat() {
  if (this.openC ==true)
  this.openC=false ;
  else
  this.openC=true ;
}

getImage(id:any) {
  //Make a call to Sprinf Boot to get the Image Bytes.
  this.http.get('http://localhost:8089/Photo/getImageById/'+id,{ responseType: 'text' })
    .subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte ;

        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        this.imageUrl= 'http://localhost:8089/Photo/getImageById/'+id;

      }
    );
}

getUserImage() {
  //Make a call to Sprinf Boot to get the Image Bytes.
  this.http.get(`http://localhost:8089/User/getPhotoByUser/${ this.currentuser().id}`,{ responseType: 'text' })
    .subscribe(
      res => {

        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte ;

        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        this.imageUrll= `http://localhost:8089/User/getPhotoByUser/${ this.currentuser().id}`;

      }
    );
}


}
