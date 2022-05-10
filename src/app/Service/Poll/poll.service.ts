import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poll } from 'src/app/Model/Poll';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  apiUrl="http://localhost:8089/Poll";
  constructor(private http:HttpClient ) { }

  createPoll(p:Poll){
    return this.http.post(`${this.apiUrl}/create`,p);
   //return this.http.post(this.url,p);
  }
showCurrentResult(id:number) {
  return this.http.get(`${this.apiUrl}/showCurrentResult/${id}`);
}

getAllPoll(){
  return this.http.get(`${this.apiUrl}/getAllPolls`) ;

}
deletePoll(id: any) {
  return this.http.delete(`${this.apiUrl}/delete/${id}`);
}

//Admin 
winner(id:any){
  return this.http.get(`${this.apiUrl}/getWinner/${id}`);


}


}
