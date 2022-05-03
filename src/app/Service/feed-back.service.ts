import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedBack } from '../Model/FeedBack';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {
apiUrl="http://localhost:8089/FeedBack"  

  constructor(private http:HttpClient) { }

  makeFeedBackToEvent(f:FeedBack){
    console.log(f);
    return this.http.put(`${this.apiUrl}/makeFeedBack/1`,f);
    
  }

  makeFeedBackTocolleague(f:FeedBack){
    return this.http.put(`${this.apiUrl}/addFeedBackToUser/1`,f);

  }

  listFeedBacks(id:any){
      return this.http.get(`${this.apiUrl}/getMyFeedBacks/${id}`);
    }
  }

