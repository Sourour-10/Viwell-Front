import { Component, OnInit } from '@angular/core';
import {AdduserService} from '../Service/User/adduser.service';
import {User} from '../Model/User';
import { SignupInfo } from '../Model/SignupInfo';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    user : User;
    test : Date = new Date();
    form: any = {};
    signupInfo!: SignupInfo;
    isSignUpFailed=false;
    errorMessage="";
    focus;
    focus1;
    focus2;
    constructor(private service:AdduserService, private router:Router) { }

    ngOnInit() {
       // this.user= new User();
    }

    onsubmit(){
        this.signupInfo= new SignupInfo(this.form.username, this.form.password, this.form.lastname, this.form.firstname,this.form.email )
    this.service.signUp(this.signupInfo).pipe(first()).subscribe(
        data=>{
            this.isSignUpFailed=false;
            this.router.navigate(['login']);

        },
        error=>{this.errorMessage=error.error.message;
        this.isSignUpFailed=true;
    }
    )
    }
    saveUser(){

   
        this.service.addUser(this.user).subscribe();
       
    
      }
}
