import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { AdduserService } from '../Service/User/adduser.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUser !: any;
  user: User;

  constructor(private service: AdduserService ) { }

  ngOnInit(): void {
     this.service.GetUser().subscribe(res => {this.listUser=res ;
        console.log("res =" +res) ;
      
      } ) ;
    } 
  }
  