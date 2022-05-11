import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class ArticleService {

    
    
    readonly API_URL="http://localhost:8089/Article";
    constructor(private httpClient:HttpClient) { }

    getAllArticles (){
        return this.httpClient.get(`${this.API_URL}/getAllArticles`)

    }
    addArticle(article: any){
        return this.httpClient.post(`${this.API_URL}/create/${1}/${3}`,article)
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
}
