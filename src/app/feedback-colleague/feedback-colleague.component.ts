import { Component, OnInit } from '@angular/core';
import { FeedBack } from '../Model/FeedBack';
import { FeedBackService } from '../Service/feed-back.service';

@Component({
  selector: 'app-feedback-colleague',
  templateUrl: './feedback-colleague.component.html',
  styleUrls: ['./feedback-colleague.component.css']
})
export class FeedbackColleagueComponent implements OnInit {
  feedBack: FeedBack ;
  feedbackText: string;
  constructor(private service: FeedBackService ) { }

  ngOnInit(): void {
    this.feedBack = new FeedBack()
  }  sendFeedBack() {
    console.log(this.feedbackText);

    this.feedBack.text=this.feedbackText;
    this.feedBack.date = new Date();
    console.log("feed"+this.feedBack);
    this.service.makeFeedBackTocolleague(this.feedBack).subscribe();
  }

  close(){
    
  }
}
