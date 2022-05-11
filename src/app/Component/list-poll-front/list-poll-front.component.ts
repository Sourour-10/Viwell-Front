import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/Service/Poll/poll.service';

@Component({
  selector: 'app-list-poll-front',
  templateUrl: './list-poll-front.component.html',
  styleUrls: ['./list-poll-front.component.css']
})
export class ListPollFrontComponent implements OnInit {

  polls:any ;
  constructor(private service:PollService ) { }

  ngOnInit(): void {
    this.getAllPolls();
  }

  getAllPolls(){
    this.service.getAllPoll().subscribe(res =>this.polls=res)

  }



}
