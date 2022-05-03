import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { AdduserService } from '../Service/User/adduser.service';

@Component({
  selector: 'app-profile-friend',
  templateUrl: './profile-friend.component.html',
  styleUrls: ['./profile-friend.component.css']
})
export class ProfileFriendComponent implements OnInit {
  userInfo: User = new User();

  name: string;
  user: User;
  currentUser: any;

  constructor(private service: AdduserService, private router: Router) { }

  ngOnInit() {
    this.user = new User();

  }

}
