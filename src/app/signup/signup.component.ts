import { Component, OnInit } from '@angular/core';
import {AdduserService} from '../Service/User/adduser.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    constructor(private service:AdduserService) { }

    ngOnInit() {}
}
