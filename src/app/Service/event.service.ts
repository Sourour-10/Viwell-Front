import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiUrl="http://localhost:8089/Event"  

  constructor(private http:HttpClient) { }



  listevents(){
      return this.http.get(`${this.apiUrl}/getAllEvents`);
    }

    discount(idUser,id:any){
      console.log(this.http.get(`${this.apiUrl}/discountBypoints/${idUser}/${id}`));
      return this.http.get(`${this.apiUrl}/discountBypoints/${idUser}/${id}`)


    }
  }

