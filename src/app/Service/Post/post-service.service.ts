import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Post } from 'src/app/Model/Post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/Model/User';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  getpostUrl : string = "/api/Post/getAllPosts";
  addpostUrl : string = "/api/Post/create/1";
  getpostByIdUrl : string = "/api/Post/getPostById"
  post: any ;

  constructor(private http:HttpClient) {
   }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.getpostUrl);

}

addPost(post: Post): Observable<Post>{
  return this.http.put<Post>(this.addpostUrl, post);
}

public  getPostById(id: number): Observable<Post> {

  return this.http.get<Post>(this.getpostByIdUrl +"/"+id);

    
}


}
