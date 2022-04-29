import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdduserService } from 'src/app/Service/User/adduser.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private service : AdduserService) { }

  ngOnInit(): void {
  }
  onsubmit(f:NgForm){
    const resetPasswordObserver={
      next: x => console.log('check email to change pasword'),
      error: err=>console.log(err)
    };
    this.service.resetPassword(f.value).subscribe(resetPasswordObserver);
  }

}
