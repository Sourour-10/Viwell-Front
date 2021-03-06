import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  url = "http://localhost:8089/User";
  constructor(private http: HttpClient) { }


  rateColleague(id: number, rate: number) {

   // return this.http.get(`${this.url}/rateColleague/1/1`);
    return this.http.put(`${this.url}/rateColleague/${id}/${rate}`,null);

  }

  rateCollaboration(id: number, rate: number) {
                                       
     return this.http.put(`${this.url}/rateCollaboration/${id}/${rate}`,null);
 
   }
   rateEvent(id: number, rate: number) {

     return this.http.put(`${this.url}/rateEvent/${id}/${rate}`,null);
 
   }
}
