import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Badge } from 'src/app/Model/Badge';
import { DomSanitizer } from '@angular/platform-browser';
import { BadgeService } from 'src/app/Service/badge.service';
import { PhotoService } from 'src/app/Service/photo.service'
import { TokenStorageService } from 'src/app/Service/User/token-storage.service';
import { ReturnStatement } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-my-badges',
  templateUrl: './my-badges.component.html',
  styleUrls: ['./my-badges.component.css']
})


export class MyBadgesComponent implements OnInit {
  listBadges: any;
  clicked = true;
  image: any;
  imageSrc: any;
  badge: Badge;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  imageUrl: string;
  idString: any
  resString: any

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService,
    private service: BadgeService,
    private photoService: PhotoService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.service.getAllMyBadges(this.currentUser().id).subscribe(res => {
      this.listBadges = res;
     // this.idString = JSON.stringify(res).charAt(JSON.stringify(res).indexOf('"id"') + 5)
      // console.log("id String   : " + this.idString  ) ;
      //console.log("res : " + JSON.stringify(res));
      //this.getImage(1) ;

    })

  }


  getBadgeDetails(name: string) {
    this.badge = new Badge();
    return this.service.getBadgeByName(name).subscribe((res: Badge) => {

      this.badge = res;

    });
  }

  public get currentUser(): any {
    return this.tokenStorage.getUser;
  }


  getImage(id: any) {
   var idNumber ;
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get('http://localhost:8089/Badge/getPhotoByBadge/' + id, { responseType: 'text' })
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.imageUrl = 'http://localhost:8089/Badge/getPhotoByBadge/' + id;

        }
      );
  }


}
