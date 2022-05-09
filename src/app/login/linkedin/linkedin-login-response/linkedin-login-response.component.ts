import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-linkedin-login-response',
  templateUrl: './linkedin-login-response.component.html',
  styleUrls: ['./linkedin-login-response.component.css']
})
export class LinkedinLoginResponseComponent implements OnInit {
  linkedInToken = "";
  
  constructor(private route: ActivatedRoute,   private router: Router) {}
  
  ngOnInit() {
    console.log("Tokeen",this.route.snapshot.queryParams["code"])
    this.linkedInToken = this.route.snapshot.queryParams["code"];
 
  }

}
