import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EventService} from '../Service/event.service' ;


@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  listEvents : any
  eventService: EventService;
  constructor(private service : EventService,private router: Router) { }

  ngOnInit(): void {
    this.getEvents() ;
  }

  getEvents(){
    this.service.listevents().subscribe(res =>{this.listEvents=res
    console.log("events :"+this.listEvents)
    console.log("res :"+res)

    })
  }

  getEventById(eventId: number){
    this.router.navigate(['event/details', eventId]);
  }

  particiapteToEvent(eventId: number,type: number){
    this.eventService.particiapteToEvent(eventId,type).subscribe(()=> {window.location.reload();});
    
  }

}
