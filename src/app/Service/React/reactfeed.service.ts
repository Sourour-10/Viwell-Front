import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { React } from 'src/app/Model/React';

@Injectable({
  providedIn: 'root'
})
export class ReactfeedService {
  
  addReactToPostUrl : string = "/api/React/LikeDislikePost";
  getMyEmojiUrl : string = "/api/React/getReactonPostByUser/";
  addReactToCommentUrl : string ="/api/React/ReactToComment";
  reaction : string;
  constructor(private http:HttpClient) { }


  addReactToPost(path: String,react: React): Observable<React>{
   
    return this.http.put<React>(this.addReactToPostUrl+path, react);
  }
  addReactToComment(path: String,react: React): Observable<React>{

    return this.http.put<React>(this.addReactToCommentUrl+path, react);

  }
  public getMyEmoji(postId:number,userId:number) {
    console.log("fine");
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
     return this.http.get(this.getMyEmojiUrl +postId+"/"+userId,{ headers, responseType: 'text' });
 

  }
}
