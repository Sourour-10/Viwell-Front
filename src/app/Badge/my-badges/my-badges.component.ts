import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Badge } from 'src/app/Model/Badge';
import { DomSanitizer } from '@angular/platform-browser';
import { BadgeService } from 'src/app/Service/badge.service';
import { TokenStorageService } from 'src/app/Service/User/token-storage.service';


@Component({
  selector: 'app-my-badges',
  templateUrl: './my-badges.component.html',
  styleUrls: ['./my-badges.component.css']
})


export class MyBadgesComponent implements OnInit {
  listBadges: any;
  responseArray: any;
  clicked = true;
  stringJson: string;
  image: any;
  imageSrc: any;
  badge: Badge;

  constructor(private tokenStorage:TokenStorageService,private service: BadgeService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    /*this.service.getAllMyBadges(1).subscribe((res: Badge[]) => {
       
      this.listBadges =   JSON.parse(JSON.stringify(res))  
          //this.listBadges = res;
      console.log("res =" + );
      console.log("list badges  =" + this.listBadges);


    }); 
  */
    this.service.getAllMyBadges(this.currentUser().id).subscribe(res => {
      this.image = JSON.stringify(res['photo']);
      let objectURL = 'data:image/png;base64,' + res['photo'];
      this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);


      this.imageSrc = 'data:image/jpeg;base64,' + this.image;
      (this.listBadges = res);
      console.log("image : " + this.image) ;
      console.log("res : " + JSON.stringify(res) ) ;
    })
  }


  getAllBadges() {
    this.clicked = true;
    return this.service.getAllMyBadges(1).subscribe((res: Badge[]) => {

      let clientWithType = Object.assign(new Badge(), res)

      console.log(clientWithType);
      this.badge = JSON.parse(JSON.stringify(res));
      console.log(JSON.stringify(res))

    });

  }
  getBadgeDetails(name: string) {
    console.log("name : " + name)

    return this.service.getBadgeByName(name).subscribe((res: Badge) => {
      this.listBadges = res;
      console.log("res =" + res);

    });
  }

  public get currentUser(): any{
    return this.tokenStorage.getUser;
  }
}
