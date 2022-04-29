import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { User } from 'src/app/Model/User';
import { AdduserService } from 'src/app/Service/User/adduser.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = null;
  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;
  listUser: any;

  constructor(private service:AdduserService) { }

  ngOnInit(): void {
 this.getusers();
     
  }

  getusers(){
    this.service.ListUser().subscribe(res =>this.users=res)
  }

  deleteUser(id: any) {
    const user = this.users.find(x => x.id === id);
  
    this.service.deleteUser(id)
        .pipe(first() )
        .subscribe(() => {this.users = this.users.filter(x => x.id !== id)
        }
        );
}
  
}
