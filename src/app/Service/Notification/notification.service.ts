import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
apiurl: string="http://localhost:8089/Notification/getAllNotifications"
  constructor( private http : HttpClient) { }

  getNotifications(){
  return  this.http.get(this.apiurl);
  }
}
