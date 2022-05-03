import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from '../Model/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
apiUrl="http://localhost:8089/Photo"   

  constructor(private http:HttpClient) { }
  getImageById(id:any){
      return this.http.get(`${this.apiUrl}/getImageById/${id}`,{responseType: 'json'});
    }

}
