import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  user: User;
  listUser: Observable<User[]> ;
  apiUrl: string = "/api/User/getAllUsers" ;

  apiuser="http://localhost:8089/User/getUserConnected";
  constructor(private http:HttpClient,obj:any) { }

  addUser(u:User){
    return this.http.post(`${this.apiUrl}/registration`,u);
  }

  GetUser(){
    return this.http.get(this.apiuser);
    console.log()
  }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  ListUser(){
    return this.http.get("http://localhost:8089/User/getAllUsers");
  }


}
  

