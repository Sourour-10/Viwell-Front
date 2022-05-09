

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class ResponseService {

    
    
    readonly API_URL="http://localhost:8089/Response";
    constructor(private httpClient:HttpClient) { }

    getAllResponses (){
        return this.httpClient.get(`${this.API_URL}/getAllResponses`)
       
    }
    addResponse(response: any){
        return this.httpClient.post(`${this.API_URL}/create/`,response)
    }
    editResponse(response: any){
        return this.httpClient.put(`${this.API_URL}/update`,response)
    
    }
    deleteResponse(responseId: any){
        return this.httpClient.delete(`${this.API_URL}/delete/${responseId}`)
    }
}
