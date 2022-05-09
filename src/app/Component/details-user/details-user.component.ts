import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit, Output, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs';
import { User } from 'src/app/Model/User';
import { AdduserService } from 'src/app/Service/User/adduser.service';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css'],
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
export class DetailsUserComponent implements OnInit {
  @Input()user : User;
  users=null;
  openC:boolean = false ;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  imageUrl: string;

  //@Output() requested=new EventEmitter<String>();
  closeResult: string;
  constructor(private service:AdduserService, private modalService: NgbModal , private http: HttpClient) { }

  ngOnInit(): void {
    this.getImage();
    this.getusers();
  }
  
  getusers(){
    this.service.ListUser().subscribe(res =>this.users=res)
  }

  
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  UserDetails(id: any) {
    const user = this.users.find(x => x.id === id);
  
  /*  this.service.getFriend(id)
        .pipe(first() )
        .subscribe(() => {this.users = this.users.filter(x => x.id !== id);
          window.location.reload();
        }
        );
*/
      }


getImage() {
  //Make a call to Sprinf Boot to get the Image Bytes.
  this.http.get('http://localhost:8089/User/getPhotoByUser/'+  this.user.userId,{ responseType: 'text' })
    .subscribe(
      res => {

        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte ;

        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        this.imageUrl= 'http://localhost:8089/User/getPhotoByUser/'+this.user.userId;

      }
    );
}

}
