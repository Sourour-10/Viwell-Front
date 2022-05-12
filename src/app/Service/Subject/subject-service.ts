


import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class SubjectService {

    
    
    readonly API_URL="http://localhost:8089/Subject";
    constructor(private httpClient:HttpClient) { }

    getAllSubjects (){
        return this.httpClient.get(`${this.API_URL}/getAllSubjects`)
    }
    addSubject(subject: any){
        return this.httpClient.post(`${this.API_URL}/create/`,subject)
    }
    editSubject(subject: any){
        return this.httpClient.put(`${this.API_URL}/update`,subject)
    
    }
    deleteSubject(subjectId: any){
        return this.httpClient.delete(`${this.API_URL}/delete/${subjectId}`)
    }

    proposeSubject(subject: any){
        return this.httpClient.post(`${this.API_URL}/proposeSubject/`,subject)
    }

    getAllApprovedSubjects (){
        return this.httpClient.get(`${this.API_URL}/getAllApprovedSubjects`)
    }
    approuverSubject(subject: any,subjectId: any){
        return this.httpClient.put(`${this.API_URL}/approve/${subjectId}`,subject)
    }
}
