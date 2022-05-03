import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-linkedin-login-response',
  templateUrl: './linkedin-login-response.component.html',
  styleUrls: ['./linkedin-login-response.component.css']
})
export class LinkedinLoginResponseComponent implements OnInit {
  linkedInToken = "";
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.linkedInToken = this.route.snapshot.queryParams["code"];
  }

}
