import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { FeedBack } from '../Model/FeedBack';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {
apiUrl="http://localhost:8089/FeedBack"  


  constructor(private http:HttpClient) { }

  makeFeedBackToEvent(id:any,f:FeedBack){
    console.log(f);
    return this.http.put(`${this.apiUrl}/makeFeedBack/${id}`,f);
    
  }

  makeFeedBackTocolleague(id:any,f:FeedBack){
    return this.http.put(`${this.apiUrl}/addFeedBackToUser/${id}`,f);

  }

  listFeedBacks(id:any){
      return this.http.get(`${this.apiUrl}/getMyFeedBacks/${id}`);
    }
  }

