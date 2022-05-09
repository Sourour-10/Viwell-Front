import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Poll } from 'src/app/Model/Poll';
import { PollService } from 'src/app/Service/Poll/poll.service';

@Component({
  selector: 'app-poll-winner',
  templateUrl: './poll-winner.component.html',
  styleUrls: ['./poll-winner.component.css']
})
export class PollWinnerComponent implements OnInit {
 @Input()poll:Poll ;
 vbAffich=false ;
 retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  imageUrl: string;
  user:any ;
  constructor(private modalService: NgbModal,private service:PollService,private http:HttpClient) {
  //  this.getImage();
   }
  ngOnInit(): void {
    this.winner(this.poll.pollId)
    
  }
winner(id:any) {
  this.service.winner(id).subscribe(res =>this.user=res)
}

openVerticallyCentered(content) {
  this.modalService.open(content, { centered: true });
}
afficher(){
  this.vbAffich=true ;
}


/*
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

*/
}
