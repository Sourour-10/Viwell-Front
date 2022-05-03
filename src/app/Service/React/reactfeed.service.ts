import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { React } from 'src/app/Model/React';

@Injectable({
  providedIn: 'root'
})
export class ReactfeedService {
  
  addReactToPostUrl : string = "/api/React/LikeDislikePost";
  constructor(private http:HttpClient) { }
  addReactToPost(path: String,react: React): Observable<React>{
    this.addReactToPostUrl = this.addReactToPostUrl+path;
    return this.http.put<React>(this.addReactToPostUrl, react);
  }
}
