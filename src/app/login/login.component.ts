import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { AppService } from "../Service/app.service";
import { User } from "../Model/User";
import { AdduserService } from "../Service/User/adduser.service";
import { TokenStorageService } from "../Service/User/token-storage.service";
import { LoginInfo } from "../Model/LoginInfo";
import { first } from "rxjs";
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  employee!:SocialUser
  focus;
  focus1;
  credentials = { username: "", password: "" };

  username: string;
  password: string;

  successMessage: '';
  invalidLogin = false;
  isLoggedIn = false;
 // isLoggedIn : 
  user: User = new User();

  form: any = {};
  isLoginFailed = false;
  errorMessage = "";
  linkedInCredentials = {
    clientId: "789ampg7y98avo",
    redirectUrl: "http://localhost:4200/#/linkedInLogin",
    scope: "r_liteprofile%20r_emailaddress" // To read basic user profile data and email
  };
  constructor(
    private app: AdduserService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private authService:SocialAuthService
  ) {}

  ngOnInit(

  ) {    this.authService.authState.subscribe((employee)=>{this.employee=employee})}
SignInWithGoogle(): any {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
}
  onSubmit() {
    this.app
      .login(new LoginInfo(this.form.username, this.form.password))
      .pipe(first())
      .subscribe(
        (data) => {
          this.isLoginFailed = false;
          this.isLoggedIn=true;
          this.router.navigateByUrl("/user-profile");
        },
        (error) => {
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        }
      );
  }

  Linkedin() {
    window.location.href ="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=789ampg7y98avo&redirect_uri=http://localhost:4200/linkedInLogin&state=foobar&scope=r_liteprofile%20r_emailaddress";
    ;


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
}
