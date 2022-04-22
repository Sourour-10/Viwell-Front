import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  user: User;
  apiUrl="http://localhost:8089/User/registration";
  apiuser="http://localhost:8089/User/getUserConnected";
  constructor(private http:HttpClient) { }

  addUser(u:User){
    return this.http.post(this.apiUrl,u);
  }

  GetUser(){
    return this.http.get(this.apiuser);
    console.log()
  }
}
