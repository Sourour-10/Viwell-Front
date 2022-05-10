import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Coach} from '../../Model/Coach';


@Injectable({
  providedIn: 'root'
})
export class CoachService {
  readonly API_URL = 'http://localhost:8089';



  constructor(private httpClient: HttpClient) { }

  addCoach(coach: Coach) {
    return this.httpClient.post(`${this.API_URL}/add-Coach`, coach);
  }
  updateCoach(coach: Coach) {

    return this.httpClient.put(`${this.API_URL}/update`, coach);
  }
  deleteCoach(idCoach: any) {
    return this.httpClient.delete(`${this.API_URL}/delete/${idCoach}`);
  }

  getAllCoaches() {
    return this.httpClient.get(`${this.API_URL}/findAll`);
  }

}
