import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/Model/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  addpostUrl : string = "/api/Comment/NewCommentToPost/";

  constructor(private http:HttpClient) { }
  addComment(comment: Comment,postId: number,userId:number): Observable<Comment>{
    return this.http.post<Comment>(this.addpostUrl+postId+"/"+1, Comment);
  }
}
