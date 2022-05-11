import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Poll } from '../Model/Poll';
import { User } from '../Model/User';
import { PollService } from '../Service/Poll/poll.service';
import { AdduserService } from '../Service/User/adduser.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  poll: Poll;
  user: User;
  test: Date = new Date();
  focus;
  focus1;
  focus2;
  constructor( private modalService: NgbModal ,private servicePoll: PollService, private service: AdduserService, private router:Router) { }

  ngOnInit() {
    this.user = new User();
    this.poll = new Poll();
  }
  saveUser() {
    this.service.addUser(this.user).subscribe();
  }
  savePoll() {
    this.servicePoll.createPoll(this.poll).subscribe();
    this.router.navigateByUrl('/listPoll');
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
