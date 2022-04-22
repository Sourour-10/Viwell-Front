import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../Service/app.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  credentials = {username: '', password: ''};
  userName:string;
  password:string;

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }

  login() {
   this.app.authenticate(this.credentials, () => {
   
        this.router.navigateByUrl('/user-profile');
    });
    return false;
  }

 login2()
 {let resp =this.app.login2(this.userName,this.password);
 resp.subscribe(data=>{
   console.log(data)
 })

}

  ngOnInit() {}
}
