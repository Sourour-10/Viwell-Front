import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdduserService } from 'src/app/Service/User/adduser.service';

@Component({
  selector: 'app-side-bar-back',
  templateUrl: './side-bar-back.component.html',
  styleUrls: ['./side-bar-back.component.css']
})
export class SideBarBackComponent implements OnInit {

  constructor(private route:Router, private service:AdduserService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.service.logout();
    this.route.navigateByUrl('/login');
    //window.location.reload() ;

  }


}
