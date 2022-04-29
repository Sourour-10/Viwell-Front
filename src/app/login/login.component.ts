import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { AppService } from "../Service/app.service";
import { User } from "../Model/User";
import { AdduserService } from "../Service/User/adduser.service";
import { TokenStorageService } from "../Service/User/token-storage.service";
import { LoginInfo } from "../Model/LoginInfo";
import { first } from "rxjs";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  credentials = { username: "", password: "" };

  username: string;
  password: string;

  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  user: User = new User();

  form: any = {};
  isLoginFailed = false;
  errorMessage = "";

  constructor(
    private app: AdduserService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit(){
    this.app.login(new LoginInfo(this.form.username,this.form.password))
    .pipe(first()).subscribe(data=>{
      this.isLoginFailed=false;
      this.router.navigateByUrl('/user-profile');
    },
    error=>{
      this.errorMessage=error.error.message;
      this.isLoginFailed=true;
    })
  }
/*
  login() {
    this.app.authenticate(this.credentials, () => {
      this.router.navigateByUrl("/user-profile");
    });
    return false;
  }

  /* login2()
 {let resp =this.app.login2(this.username,this.password);
 resp.subscribe(data=>{
   console.log(data)
 })

}

handleLogin() {
  this.app.authenticationService(this.username, this.password).subscribe((result)=> {
    this.invalidLogin = false;
    this.loginSuccess = true;
    this.successMessage = 'Login Successful.';
    this.router.navigate(['/hello-world']);
  }, () => {
    this.invalidLogin = true;
    this.loginSuccess = false;
  });      
}  

*/
  ngOnInit() {}
}
