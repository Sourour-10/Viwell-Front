import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { React } from 'src/app/Model/React';
import { TokenStorageService } from '../User/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ReactfeedService {
  
  addReactToPostUrl : string = "/api/React/LikeDislikePost";
  getMyEmojiUrl : string = "/api/React/getReactonPostByUser/";
  addReactToCommentUrl : string ="/api/React/ReactToComment";
  reaction : string;
  constructor(private http:HttpClient,private token :TokenStorageService) { }
  public get currentuser(): any{
    return this.token.getUser;
  }


  addReactToPost(path: String,react: React): Observable<React>{
   
    return this.http.put<React>(this.addReactToPostUrl+path+this.currentuser().id, react);
  }
  addReactToComment(path: String,react: React): Observable<React>{

    return this.http.put<React>(this.addReactToCommentUrl+path+this.currentuser().id, react);

  }
  public getMyEmoji(postId:number) {
    console.log("fine");
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
     return this.http.get(this.getMyEmojiUrl +postId+"/"+this.currentuser().id,{ headers, responseType: 'text' });
 
   
  }
}
