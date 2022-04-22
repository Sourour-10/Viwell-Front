import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poll } from 'src/app/Model/Poll';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  apiUrl="http://localhost:8089/Poll";
  url="http://localhost:8089/Poll/create";
  constructor(private http:HttpClient ) { }

  createPoll(p:Poll){
    return this.http.post(`${this.apiUrl}/create`,p);
   //return this.http.post(this.url,p);
  }
}
