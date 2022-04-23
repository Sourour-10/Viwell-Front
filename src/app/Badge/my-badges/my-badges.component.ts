import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Badge } from 'src/app/Model/Badge';
import { BadgeService } from 'src/app/Service/badge.service';

@Component({
  selector: 'app-my-badges',
  templateUrl: './my-badges.component.html',
  styleUrls: ['./my-badges.component.css']
})
export class MyBadgesComponent implements OnInit {
 listBadges:Badge[] ;
 clicked = true ;
  constructor(private service:BadgeService) { }

  ngOnInit(): void {
  }
  getAllBadges(){
    this.clicked = true ;
    this.service.getAllMyBadges(1).subscribe( (data: Badge[] ) =>this.listBadges = data );
  
  }

  
}
