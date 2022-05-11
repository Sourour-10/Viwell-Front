import { Component, OnInit,Input } from '@angular/core';
import { FeedBack } from '../Model/FeedBack';
import { FeedBackService } from '../Service/feed-back.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Event } from '../Model/Event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-event',
  templateUrl: './feedback-event.component.html',
  styleUrls: ['./feedback-event.component.css']
})
export class FeedbackEventComponent implements OnInit {
  feedBack: FeedBack;
  feedbackText: string;
  text: string;
  @Input()event : Event;

  isAddMode: boolean;
  loading = false;
  submitted = false;
  closeResult = '';

  constructor( private router:Router ,private modalService: NgbModal,private service: FeedBackService) {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  
}

  

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

    this.service.makeFeedBackToEvent(this.event.eventId ,this.feedBack).subscribe(()=> {window.location.reload();});

   // this.router.navigate(['list-event']);

  }

  close(){
    
  }
}
