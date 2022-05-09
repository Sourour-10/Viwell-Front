import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
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
    this.getAllPolls();
  }

  getAllPolls(){
    this.service.getAllPoll().subscribe(res =>this.polls=res)

  }


 
  deletePoll(id: any) {
    const poll = this.polls.find(x => x.id === id);
  
    this.service.deletePoll(id)
        .pipe(first() )
        .subscribe(() => {this.polls = this.polls.filter(x => x.id !== id);
          window.location.reload();
        }
        );
}

}
