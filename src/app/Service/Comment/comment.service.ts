import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/Model/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  addcommentUrl : string = "/api/Comment/NewCommentToPost";
  getcommentUrl : string = "/api/Comment/getCommentByPost/";
  getRepliesUrl : string = "/api/Comment/getRepliesByComment/";
  addreplyUrl : string = "/api/Comment/ReplyToComment/";

  constructor(private http:HttpClient) { }
  addComment(comment: Comment,postId: number,userId:number): Observable<Comment>{
    return this.http.put<Comment>(this.addcommentUrl+"/"+postId+"/"+userId, comment);
  }
  getComments(postId: number): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.getcommentUrl+postId);
}
getRepliesByComment(commentId: number): Observable<Comment[]>{
  return this.http.get<Comment[]>(this.getRepliesUrl+commentId);
}
addReplyToComment(commentId: number,comment: String): Observable<Comment>{
  return this.http.post<Comment>(this.addreplyUrl+commentId, comment);
}
getAllComments(): Observable<Comment[]>{
  return this.http.get<Comment[]>("/api/Comment/getAllComments/");
}
}
