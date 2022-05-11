import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/Model/User';
import { BadgeService } from 'src/app/Service/badge.service';

@Component({
  selector: 'app-assign-badge-to-user',
  templateUrl: './assign-badge-to-user.component.html',
  styleUrls: ['./assign-badge-to-user.component.css']
})
export class AssignBadgeToUserComponent implements OnInit {
  @Input()user:User;
  badges:any ;
  
  constructor(private service:BadgeService , private modalService: NgbModal ) { }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
  this.getbadges();
  }

  getbadges() {
    this.service.ListBadges().subscribe(res => this.badges = res)
  }

  assignBadge(id:any){
    this.service.assignBadgeToUser(this.user.userId,id).subscribe();
  }

}
