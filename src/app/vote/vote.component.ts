import { Component, OnInit } from '@angular/core';
import { PollService } from '../Service/Poll/poll.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  msg: string;
  constructor(private pollService: PollService) { }

  ngOnInit(): void {
  }

  getCurrentResult() {

    this.pollService.showCurrentResult().subscribe(res => {
      (this.msg = JSON.stringify(res));
    })
  }


}
