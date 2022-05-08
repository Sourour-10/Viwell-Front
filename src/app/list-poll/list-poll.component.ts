import { Component, OnInit } from '@angular/core';
import { PollService } from '../Service/Poll/poll.service';

@Component({
  selector: 'app-list-poll',
  templateUrl: './list-poll.component.html',
  styleUrls: ['./list-poll.component.css']
})
export class ListPollComponent implements OnInit {
 polls:any ;
  constructor(private service:PollService ) { }

  ngOnInit(): void {
  }

  getAllPolls(){

  }

}
