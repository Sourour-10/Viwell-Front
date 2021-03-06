

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "../User/token-storage.service";

@Injectable({
    providedIn: 'root'
  })

export class ResponseService {

    
    
    readonly API_URL="http://localhost:8089/Response";
    readonly API_URL2="http://localhost:8089/React";
    constructor(private tokenStorage:TokenStorageService,private httpClient:HttpClient) { }

    getAllResponses (){
        return this.httpClient.get(`${this.API_URL}/getAllResponses`)
       
    }
    addResponse(response: any, articleId: any ){
        return this.httpClient.post(`${this.API_URL}/create/${articleId}`,response)
    }
    editResponse(response: any){
        return this.httpClient.put(`${this.API_URL}/update`,response)
    
    }
    deleteResponse(responseId: any){
        return this.httpClient.delete(`${this.API_URL}/delete/${responseId}`)
    }

    getAllResponsesArticle(articleId:any){
        return this.httpClient.get(`${this.API_URL}/getAllResponsesByArticle/${articleId}`)

    }

    react(id:any,responseId: any){

          return this.httpClient.put(`${this.API_URL2}/ReactToResponse/${id}/${responseId}/${this.currentUser().id}`,null)    
    }

    responseReacts(responseId: any){

        return this.httpClient.get(`${this.API_URL2}/ResponseReacts/${responseId}`)    
  }


  public get currentUser(): any {
    return this.tokenStorage.getUser;
  }

}
