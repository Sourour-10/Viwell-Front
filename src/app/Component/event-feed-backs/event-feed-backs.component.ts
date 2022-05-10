import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedBackService } from 'src/app/Service/feed-back.service';

@Component({
  selector: 'app-event-feed-backs',
  templateUrl: './event-feed-backs.component.html',
  styleUrls: ['./event-feed-backs.component.css']
})
export class EventFeedBacksComponent implements OnInit {
  @Input() event: Event;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  closeResult = '';
  feedbacks: any;


  constructor(private modalService: NgbModal, private service: FeedBackService) {
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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


  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
    this.getfeedbacks(1)
  }

  getfeedbacks(id: any) {
    this.service.listFeedBacksEvent(id).subscribe(res => this.feedbacks = res)
  }
}
