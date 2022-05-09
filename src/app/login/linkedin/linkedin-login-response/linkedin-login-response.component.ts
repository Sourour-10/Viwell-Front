import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-linkedin-login-response',
  templateUrl: './linkedin-login-response.component.html',
  styleUrls: ['./linkedin-login-response.component.css']
})
export class LinkedinLoginResponseComponent implements OnInit {
  linkedInToken = "";
  
  constructor(private route: ActivatedRoute,   private router: Router, private http:HttpClient) {}
  
  ngOnInit() {
    //console.log("Tokeen",this.route.snapshot.queryParams["code"])
    this.linkedInToken = this.route.snapshot.queryParams["code"];
 
  }
  token: any;
  getToken(){
    console.log("Tokeen",this.route.snapshot.queryParams["code"]);
    this.http.get(`http://localhost:8089/User/getToken`,this.route.snapshot.queryParams["code"]
    ).subscribe(res=>{this.token=res}
    )
  }


}
