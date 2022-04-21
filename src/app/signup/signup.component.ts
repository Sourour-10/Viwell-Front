import { Component, OnInit } from '@angular/core';
import {AdduserService} from '../Service/User/adduser.service';
import {User} from '../Model/User';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    user : User;
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    constructor(private service:AdduserService) { }

    ngOnInit() {
        this.user= new User();
    }
    saveUser(){

   
        this.service.addUser(this.user).subscribe();
       
    
      }
}
