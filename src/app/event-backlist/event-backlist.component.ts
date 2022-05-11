import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../Service/event.service';
import { Event } from '../Model/event';

@Component({
  selector: 'app-event-backlist',
  templateUrl: './event-backlist.component.html',
  styleUrls: ['./event-backlist.component.css']
})
export class EventBacklistComponent implements OnInit {

  console = console;
  listEvents: any;
  events: Event[];
  closeResult!: string;
  form: boolean = false;

  constructor(private eventService: EventService,
    private router: Router , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getNonAproovedEvents();   
  }

  private getNonAproovedEvents(){
    this.eventService.getNonAproovedEvents().subscribe(data => {
      this.events = data;
    });
  }

  getEventById(eventId: number){
    this.router.navigate(['event-details', eventId]);
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
      this.getNonAproovedEvents();
    })
  }


  }


