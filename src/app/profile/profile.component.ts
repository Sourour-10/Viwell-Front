import { Component, OnInit } from '@angular/core';
import { AddEventListenerOptions } from 'rxjs/internal/observable/fromEvent';
import { User } from '../Model/User';
import { AdduserService } from '../Service/User/adduser.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
user : User;
    constructor(private service:AdduserService) { }

    ngOnInit() {
       return this.service.GetUser().subscribe();

       
    }

}
