import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { AdduserService } from '../Service/User/adduser.service';


@Component({
  selector: 'app-top-employees',
  templateUrl: './top-employees.component.html',
  styleUrls: ['./top-employees.component.css']
})
export class TopEmployeesComponent implements OnInit {
  users = null;
  sortedUsers = null;
  filterTerm!: string;

  openC: boolean = false;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  imageUrl: string;
  //
  first: any;
  second: any;
  third: any;

  constructor(private service: AdduserService, private http: HttpClient
  ) { }
  ngOnInit(): void {

    this.users = this.getusers();
    // console.log("users "+this.users)


  }




  getusers() {
    this.service.Top3User().subscribe(res => {
      this.users = res;
      console.log("res " + JSON.stringify(res));
      var ch :string ;
      ch = JSON.stringify(res) ;
      this.first = ch.charAt(ch.indexOf('"userId"') + 9)
      
      console.log("first  " + this.first);
    })


  }

  firstPlace() {
    console.log("users " + this.users);
    this.first = this.users.splice(0);

  }
  secondPlace() {
    this.second = this.users.splice(1);

  }
  thirdPlace() {
    this.third = this.users.splice(2);

  }

  getImage(id: any) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    var image: any;
    this.http.get('http://localhost:8089/User/getPhotoByUser/' + id, { responseType: 'text' })
      .subscribe(
        res => {

          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;

          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.imageUrl = 'http://localhost:8089/User/getPhotoByUser/' + id;
          image = this
            .imageUrl;

        }
      );
    return image;
  }
}
