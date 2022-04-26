import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEventListenerOptions } from 'rxjs/internal/observable/fromEvent';
import { User } from '../Model/User';
import { AdduserService } from '../Service/User/adduser.service';
import { TokenStorageService } from '../Service/User/token-storage.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

userInfo: User = new User();

name:string;
user :User;
currentUser: any;

    constructor(private service:AdduserService, private router: Router, private token :TokenStorageService) { }

    ngOnInit() {
        this.currentUser = this.token.getUser();
      }
        

       
       logout(): void {
        this.service.logout();
        this.router.navigateByUrl('/login');
      }
    

}
