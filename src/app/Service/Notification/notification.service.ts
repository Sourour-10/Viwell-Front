import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '../User/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
apiurl: string="http://localhost:8089/Notification/getAllNotifications"
  constructor( private http : HttpClient,  private tokenStorage:TokenStorageService) { }
  public get currentUser(): any{
    return this.tokenStorage.getUser;
  }

  getNotifications(){
  return  this.http.get(this.apiurl);
  }

  getNonViewedNotifications(){
    return  this.http.get(`http://localhost:8089/Notification/showNonViwedNotification/${ this.currentUser().id}`);
    }

 NonViewedNotificationNum(){
   return this.http.get(`http://localhost:8089/Notification/showNumberNonViwedNotifications/${ this.currentUser().id}`)
 }

 updateNotification(id : any){
   return this.http.put(`http://localhost:8089/Notification/update/${id}`,null);
 }
}


