import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Post } from 'src/app/Model/Post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/Model/User';
import { ReactfeedService } from '../React/reactfeed.service';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  getpostUrl : string = "/api/Post/getAllPosts";
  addpostUrl : string = "/api/Post/create/1";
  getpostByIdUrl : string = "/api/Post/getPostById";
  sharepostUrl: string = "/api/Post/SharePost";
  myPosts:string = "/api/Post/GetMyPosts/"
  post: any ;
  posts : any = this.getPosts() ;
  ListReact: Observable<string[]>;
  ListPost:Post[];
  isadded: boolean = false;
  uploadedImage: File;
  dbImage: any;
  image: any;
  postResponse: any;
  successResponse: string;

  constructor(private http:HttpClient) {
   
    this.http.get<Post[]>(this.getpostUrl).subscribe(
      (data: Post[]) => this.ListPost = data);
    
   }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.getpostUrl);

  }
  getMyPosts(userId:number): Observable<Post[]>{
    return this.http.get<Post[]>(this.myPosts+userId);

  }

 /*
  getMyEmojis(): Observable<string[]>{


//fill the reacts
  for (let i = 0; i < 17; i++) {
    this.reactfeedService.getMyEmoji(this.ListPost[i].postId,1).subscribe(
    (data: any) => this.ListReact[i] = data);

    return this.ListReact;
}

} */

addPost(post: Post): Observable<Post>{
  return this.http.put<Post>(this.addpostUrl, post);
}
sharepost(postId:number, userId:number,post: Post): Observable<Post> {

  console.log("im gonna share a post")
  console.log(this.sharepostUrl);
  return this.http.put<Post>(this.sharepostUrl+"/"+postId+"/"+userId, post);
}

public  getPostById(id: number) {

  return this.http.get<Post>(this.getpostByIdUrl +"/"+id);
}
public getNcomments(postId : number){
  return this.http.get<number>("/api/Post/getNcomments/"+postId);
}
public getNlikes(postId : number){
  return this.http.get<number>("/api/Post/getNlikes/"+postId);
}
public getNshares(postId : number){
  return this.http.get<number>("/api/Post/getNshares/"+postId);
}
//Uplodad photo
public onImageUpload(event) {
  this.uploadedImage = event.target.files[0];
}
uploadPostPicture(postId:number) {
  const imageFormData= new FormData();
  imageFormData.append('photo',this.uploadedImage)
   
  this.http.post(`/api/Photo/upload/image/${postId}`, imageFormData)
  .subscribe((response) => {
    if (response=== 200) {
      this.postResponse = response;
      this.successResponse = this.postResponse.body.message;
    } else {
      this.successResponse = 'Image not uploaded due to some error!';
    }
  }
  );
  }

  uploadProfileImage(formData: FormData,postId:number): Observable<any> {
    return this.http.post<FormData>(`/api/Photo/upload/image/${postId}`, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }
  




}
