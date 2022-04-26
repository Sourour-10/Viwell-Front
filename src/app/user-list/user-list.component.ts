import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { AdduserService } from 'src/app/Service/User/adduser.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;
  listUser !: User[];
  user: User;

  constructor(private service: AdduserService) { }

  ngOnInit(): void {
   // this.service.getAll().subscribe(
     // (data: User[]) => this.listUser = data);
      this.service.ListUser().subscribe((res:User[]) => {this.listUser=res ;
        console.log("res =" +res) ;
      
      } ) ;
    }
  }
  