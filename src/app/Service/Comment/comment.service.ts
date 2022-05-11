import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/Model/Comment';
import { TokenStorageService } from '../User/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  addcommentUrl : string = "/api/Comment/NewCommentToPost";
  getcommentUrl : string = "/api/Comment/getCommentByPost/";
  getRepliesUrl : string = "/api/Comment/getRepliesByComment/";
  addreplyUrl : string = "/api/Comment/ReplyToComment/";

  constructor(private http:HttpClient,private token :TokenStorageService) { }
  public get currentuser(): any{
    return this.token.getUser;
  }
  addComment(comment: Comment,postId: number): Observable<Comment>{
    return this.http.put<Comment>(this.addcommentUrl+"/"+postId+"/"+this.currentuser().id, comment);
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
getCommentById(id: number) {

  return this.http.get<Comment>("/api/Comment/getCommentById/"+id);
}
}
