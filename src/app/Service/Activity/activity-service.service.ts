import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activity } from "src/app/Model/activity";


@Injectable({
    providedIn: 'root'
  })

export class ActivityService {
    
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
    }
    readonly API_URL="/api/Activity";
    constructor(private httpClient:HttpClient) { }

    getAllActivitys() : Observable<Activity[]>{
        //console.log(this.httpClient.get<Activity[]>(`${this.API_URL}`)) 
        return this.httpClient.get<Activity[]>(`${this.API_URL}/getAllActivitys`)
       //return this.httpClient.get(${this.API_URL}/getAllActivitys);

    }

    getActivityById(id: number): Observable<Activity>{
        return this.httpClient.get<Activity>(`${this.API_URL}/getActivityById/${id}`);
      }

    addActivity(activity: Activity): Observable<Activity> {
        return this.httpClient.post<Activity>(`${this.API_URL}/create`,activity,this.httpOptions)
    }

    editActivity(activity: any){
        return this.httpClient.put(`${this.API_URL}/update`,activity)
    
    }
    deleteActivity(activityId: any){
        return this.httpClient.delete(`${this.API_URL}/delete/${activityId}`)
    }
}
