import { Component, OnInit } from '@angular/core';
import {EventService} from '../Service/event.service' ;


@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  listEvents : any
  constructor(private service : EventService) { }

  ngOnInit(): void {
    this.getEvents() ;
  }

  getEvents(){
    this.service.listevents().subscribe(res =>{this.listEvents=res
    console.log("events :"+this.listEvents)
    console.log("res :"+res)

    })
  }

  counter(i: number) {
    return new Array(i);
  }

}
