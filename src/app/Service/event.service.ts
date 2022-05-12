import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../Model/event';
import { TokenStorageService } from './User/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiUrl = "http://localhost:8089/Event"

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  public get currentUser(): any{
    return this.tokenStorage.getUser;
  }

  //Aziz
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}
readonly API_URL="/api/Event";

getAllEvents() : Observable<Event[]>{
    //console.log(this.httpClient.get<Event[]>(`${this.API_URL}`))
    return this.http.get<Event[]>(`${this.API_URL}/getAllEvents`)
   //return this.httpClient.get(${this.API_URL}/getAllEvents);

}

getNonAproovedEvents() : Observable<Event[]>{
  //console.log(this.httpClient.get<Event[]>(`${this.API_URL}`))
  return this.http.get<Event[]>(`${this.API_URL}/getNonAproovedEvents/${this.currentUser().id}`)
 //return this.httpClient.get(${this.API_URL}/getAllEvents);

}

getEventById(id: number): Observable<Event>{
    return this.http.get<Event>(`${this.API_URL}/getEventById/${id}`);
  }

addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.API_URL}/create/${this.currentUser().id}`,event,this.httpOptions)
}


  propose(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.API_URL}/propose/${this.currentUser().id}`, event, this.httpOptions);
  }

  approveEventByAdmin(event: Event) {
    return this.http.put(`${this.API_URL}/approve/${this.currentUser().id}`, event);

  }

  particiapteToEvent(eventId: any, type: any) {
    return this.http.put(`${this.API_URL}/particiapteToEvent/${eventId}/${this.currentUser().id}/${type}`, null);

  }


  affectUserToEvent(userId: number, eventId: number) {
    return this.http.put(`${this.API_URL}/affectusertoevent/${userId}/${eventId}`, null);

  }

  editEvent(event: any) {
    return this.http.put(`${this.API_URL}/update/${this.currentUser().id}`, event)

  }
  deleteEvent(eventId: any) {
    return this.http.delete(`${this.API_URL}/delete/${eventId}`)
  }
  //End Aziz


  listevents() {
    return this.http.get(`${this.apiUrl}/getAllEvents`);
  }

  discount(idUser, id: any): Observable<string> {
    return this.http.get(`${this.apiUrl}/discountBypoints/${idUser}/${id}`, { responseType: 'text' })


  }

}


