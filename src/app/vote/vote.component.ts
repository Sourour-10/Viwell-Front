import { Component, OnInit } from '@angular/core';
import { PollService } from '../Service/Poll/poll.service';
import { AdduserService } from 'src/app/Service/User/adduser.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../Service/User/token-storage.service';



@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  users = null;
  checked: any;
  msg: string = "";
  vb: any = false;
  //Reactive form

  constructor(private tokenStorage:TokenStorageService ,
    private service: AdduserService, private pollService: PollService) { }

  ngOnInit(): void {
    this.getusers();
  }
  getusers() {
    this.service.ListUser().subscribe(res => this.users = res)
  }

  getCurrentResult() {

    this.pollService.showCurrentResult(this.currentUser().id).subscribe(res => {
      (this.msg = "Now you have " + JSON.stringify(res));
      this.msg = this.msg + "  vote, never lose hope";
    })
  }
  vote(id: any) {
    // this.checked = this.userForm.get('userId').value;
    this.service.voteTo(this.currentUser().id, id).subscribe(res => {
      this.vb = res
      if (this.vb == false)
        this.msg = "    Sorry you've already voted  ";
      else
        this.msg = " Congratulation, you'have voted ";

    });

  }
  public get currentUser(): any{
    return this.tokenStorage.getUser;
  }
}


