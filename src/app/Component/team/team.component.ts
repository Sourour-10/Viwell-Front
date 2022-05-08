import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdduserService } from 'src/app/Service/User/adduser.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  users = null;
  filterTerm!: string;

  openC:boolean = false ;
selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  imageUrl: string;
  constructor(private service:AdduserService,  private http: HttpClient
    ) { }

  ngOnInit(): void {
  this.getusers();

  }

  getusers(){
    this.service.ListUser().subscribe(res =>this.users=res)
  }


  getImage(id: any) {
    //Make a call to Sprinf Boot to get the Image Bytes.
   var image:any;
    this.http.get('http://localhost:8089/User/getPhotoByUser/'+  id,{ responseType: 'text' })
      .subscribe(
        res => {
  
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte ;
  
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.imageUrl= 'http://localhost:8089/User/getPhotoByUser/'+id;
          image=this
          .imageUrl;
  
        }
      );
  return image;
    }
}
