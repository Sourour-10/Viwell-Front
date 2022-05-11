import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../Service/User/token-storage.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  currentUser: any;

  constructor(private token :TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
