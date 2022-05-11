import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/Model/User";
import { TokenStorageService } from "../User/token-storage.service";

@Injectable({
    providedIn: 'root'
  })

export class ArticleService {

    
    
    readonly API_URL="http://localhost:8089/Article";
    constructor(private httpClient:HttpClient,private tokenStorage:TokenStorageService) { }

    getAllArticles (){
        return this.httpClient.get(`${this.API_URL}/getAllArticles`)

    }
    addArticle(article: any,subjectId:any){
      console.log("Current User id " + this.currentUser().id) ;
        return this.httpClient.post(`${this.API_URL}/create/${this.currentUser().id}/${subjectId}`,article)
    }
    editArticle(article: any){
        return this.httpClient.put(`${this.API_URL}/update`,article)
    
    }
    deleteArticle(articleId: any){
        return this.httpClient.delete(`${this.API_URL}/delete/${articleId}`)
    }
    getAllArticlesSubject(subjectId:any){
        return this.httpClient.get(`${this.API_URL}/getAllArticlesBySubjects/${subjectId}`)

    }


    
  public get currentUser(): any {
    return this.tokenStorage.getUser;
  }


}
