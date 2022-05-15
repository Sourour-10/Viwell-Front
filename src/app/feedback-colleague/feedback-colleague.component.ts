import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedBack } from '../Model/FeedBack';
import { User } from '../Model/User';
import { FeedBackService } from '../Service/feed-back.service';

@Component({
  selector: 'app-feedback-colleague',
  templateUrl: './feedback-colleague.component.html',
  styleUrls: ['./feedback-colleague.component.css']
})
export class FeedbackColleagueComponent implements OnInit {
  isAddMode: boolean;
  loading = false;
  submitted = false;
  closeResult = '';
  feedBack: FeedBack;
  feedbackText: string;
  @Input()user : User;
users=null;

  constructor(private service: FeedBackService, private modalService: NgbModal, private route: ActivatedRoute,
    private router: Router) { }

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

  } sendFeedBack() {
    console.log(this.feedbackText);

    this.feedBack.text = this.feedbackText;
    this.feedBack.date = new Date();
    console.log("feed" + this.feedBack);
    this.service.makeFeedBackTocolleague(this.user.userId,this.feedBack).subscribe();
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  close() {

  }
}
