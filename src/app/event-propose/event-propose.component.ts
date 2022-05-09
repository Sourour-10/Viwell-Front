import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../Model/event';
import { EventService } from '../Service/event.service';

@Component({
  selector: 'app-event-propose',
  templateUrl: './event-propose.component.html',
  styleUrls: ['./event-propose.component.css']
})
export class EventProposeComponent implements OnInit {

  event: Event = new Event();
  constructor(private eventService: EventService,
    private router: Router) { }

  ngOnInit(): void {
  }

  propose(){
    //this.event.isApprooved=false;
    //this.event.privateEvent=true;
    this.event.rating =0;  
    this.event.ratingNumber=0;
    this.event.endDate=new Date();
    console.log("event"+this.event);
    this.eventService.propose(this.event).subscribe( data =>{
      console.log(data);
      this.goToEventList();
    },
    error => console.log(error));
  }

  goToEventList(){
    this.router.navigate(['/list-event']);
  }
  
  onSubmit(){
    console.log(this.event);
    this.propose();
  }

}
