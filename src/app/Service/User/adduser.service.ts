import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Model/User';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  apiUrl="http://localhost:8089/User/registration";
  constructor(private http:HttpClient) { }

  addUser(u:User){
    return this.http.post(this.apiUrl,u);
  }
}
