import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../Service/event.service';
import { Event } from '../Model/event';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  event: Event = new Event();
  constructor(private eventService: EventService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addEvent(){
    this.event.isApprooved=true;
    //this.event.privateEvent=true;
    this.event.rating =0;  
    this.event.ratingNumber=0;
    this.event.endDate=new Date();
    console.log("event"+this.event);
    this.eventService.addEvent(this.event).subscribe( data =>{
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
    this.addEvent();
  }

}
