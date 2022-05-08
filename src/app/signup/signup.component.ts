import { Component, OnInit } from '@angular/core';
import {AdduserService} from '../Service/User/adduser.service';
import {User} from '../Model/User';
import { SignupInfo } from '../Model/SignupInfo';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    textFormControl= new FormControl('', [Validators.required]);
    passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
    user : User;
    test : Date = new Date();
    form: any = {};
    signupInfo!: SignupInfo;
    isSignUpFailed=false;
    errorMessage="";
    focus:any;
    focus1:any;
    focus2:any;
    constructor(private service:AdduserService, private router:Router) { }

    ngOnInit() {
       // this.user= new User();
    }

    onsubmit(){
        this.signupInfo= new SignupInfo(this.form.username, this.form.password, this.form.lastname, this.form.firstname,this.form.email,this.form.cin,
            this.form.birthdate,
           this.form.phoneNumber)
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
