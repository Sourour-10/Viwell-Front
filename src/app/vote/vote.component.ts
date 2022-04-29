import { Component, OnInit } from '@angular/core';
import { PollService } from '../Service/Poll/poll.service';
import { AdduserService } from 'src/app/Service/User/adduser.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  users = null;
  msg: string;
  constructor(private service:AdduserService ,private pollService: PollService) { }

  ngOnInit(): void {
    this.getusers() ;
  }
    getusers(){
    this.service.ListUser().subscribe(res =>this.users=res)
  }

  getCurrentResult() {

    this.pollService.showCurrentResult(1).subscribe(res => {
      (this.msg = "Now you have " + JSON.stringify(res))  ;
      this.msg= this.msg + "  vote, never lose hope" ;
    })
  }


}
