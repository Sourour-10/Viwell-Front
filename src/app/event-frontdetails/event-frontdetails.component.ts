import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../Model/event';
import { EventService } from '../Service/event.service';

@Component({
  selector: 'app-event-frontdetails',
  templateUrl: './event-frontdetails.component.html',
  styleUrls: ['./event-frontdetails.component.css']
})
export class EventFrontdetailsComponent implements OnInit {
  id: number
  event: Event
  events: Event[];
  constructor(private eventService: EventService,private route: ActivatedRoute, private employeService: EventService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.event = new Event();
    this.employeService.getEventById(this.id).subscribe( data => {
      this.event = data;
    });
  }

  getAllEvents(){
    this.eventService.getAllEvents().subscribe(data => {
      this.events = data;
    });
  }

  goToEventList(){
    this.router.navigate(['/list-event']);
  }

  particiapteToEvent(eventId: any,type: any){
    this.eventService.particiapteToEvent(eventId,type).subscribe(()=> {window.location.reload();});
    
  }
  counter(i: number) {
    return new Array(i);
  }

}
