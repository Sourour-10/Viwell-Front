import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { AdduserService } from '../Service/User/adduser.service';

@Component({
  selector: 'app-top-points',
  templateUrl: './top-points.component.html',
  styleUrls: ['./top-points.component.css']
})
export class TopPointsComponent implements OnInit {


  @Input() user: User;
  users = null;

  openC: boolean = false;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  imageUrl: string;

  //@Output() requested=new EventEmitter<String>();
  closeResult: string;
  //ratting = 5;
  constructor(private service: AdduserService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getImage();
   // this.getusers();
  }

  counter(i: number) {
    return new Array(i);
  }

  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
   // console.log("userid", this.user.userId);
    this.http.get('http://localhost:8089/User/getPhotoByUser/' + this.user.userId, { responseType: 'text' })

      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.imageUrl = 'http://localhost:8089/User/getPhotoByUser/' + this.user.userId;
        }
      );
  }


}



