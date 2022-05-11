import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Event } from '../Model/event';
import { EventService } from '../Service/event.service';

@Component({
  selector: 'app-event-frontlist',
  templateUrl: './event-frontlist.component.html',
  styleUrls: ['./event-frontlist.component.css']
})
export class EventFrontlistComponent implements OnInit {


  console = console;
  listEvents: any;
  events: Event[];
  closeResult!: string;
  form: boolean = false;

  constructor(private eventService: EventService,
    private router: Router , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllEvents();   
  }

  private getAllEvents(){
    this.eventService.getAllEvents().subscribe(data => {
      this.events = data;
    });
  }

  getEventById(eventId: number){
    this.router.navigate(['event/details', eventId]);
  }

  
  approveEventByAdmin(event: Event){

    this.eventService.approveEventByAdmin(event).subscribe(()=> {window.location.reload();});
    
  }

    particiapteToEvent(eventId: any,type: any){
    this.eventService.particiapteToEvent(eventId,type).subscribe(()=> {window.location.reload();});
    
  }
  deleteEvent(id: number){
    this.eventService.deleteEvent(id).subscribe( data => {
      console.log(data);
      this.getAllEvents();
    })
  }

}
