import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../Model/event';
import { EventService } from '../Service/event.service';

@Component({
  selector: 'app-event-backdetails',
  templateUrl: './event-backdetails.component.html',
  styleUrls: ['./event-backdetails.component.css']
})
export class EventBackdetailsComponent implements OnInit {

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

  getNonAproovedEvents(){
    this.eventService.getNonAproovedEvents().subscribe(data => {
      this.events = data;
    });
  }

  goToNonAppEventList(){
    this.router.navigate(['/back/event']);
  }

}
