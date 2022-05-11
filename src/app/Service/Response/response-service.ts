

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class ResponseService {

    
    
    readonly API_URL="http://localhost:8089/Response";
    readonly API_URL2="http://localhost:8089/React";
    constructor(private httpClient:HttpClient) { }

    getAllResponses (){
        return this.httpClient.get(`${this.API_URL}/getAllResponses`)
       
    }
    addResponse(response: any ){
        return this.httpClient.post(`${this.API_URL}/create/${2}`,response)
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
      
      //  return this.httpClient.put(`${this.API_URL2}/ReactToResponse/6/3/1`,null)    

          return this.httpClient.put(`${this.API_URL2}/ReactToResponse/${id}/${responseId}/1`,null)    
    }
}
