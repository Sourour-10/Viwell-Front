import { Component, OnInit } from '@angular/core';
import { FeedBack } from '../Model/FeedBack';
import { FeedBackService } from '../Service/feed-back.service';

@Component({
  selector: 'app-feedback-event',
  templateUrl: './feedback-event.component.html',
  styleUrls: ['./feedback-event.component.css']
})
export class FeedbackEventComponent implements OnInit {
  feedBack: FeedBack;
  feedbackText: string;
  text: string;
  constructor(private service: FeedBackService) { }

  ngOnInit(): void {
    this.feedBack = new FeedBack()
  }
  Click1() {
    this.feedbackText = "angry\n"
  }
  Click2() {
    this.feedbackText = "moderate\n"

  }
  Click3() {
    this.feedbackText = "neutral\n"

  }
  Click4() {
    this.feedbackText = "smile\n"

  }
  Click5() {
    this.feedbackText = "happy\n"

  }

  sendFeedBack() {
    console.log(this.feedbackText);
    this.feedbackText = this.feedbackText + this.text;
    this.feedBack.text=this.feedbackText;
    this.feedBack.date = new Date();
    console.log("feed"+this.feedBack);

    this.service.makeFeedBackToEvent(this.feedBack).subscribe();
  }

  close(){
    
  }
}
