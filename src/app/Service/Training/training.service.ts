import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Training} from '../../Model/Training';



@Injectable({
  providedIn: 'root'
})
export class TrainingService {





  readonly API_URL = 'http://localhost:8089/Training';



  constructor(private httpClient: HttpClient) { }

  addTraining(training: Training) {
    return this.httpClient.post(`${this.API_URL}/add-training`, training);
  }

  addAndAffectTrainingToCoach(training: Training, idCoach: any ) {

    return this.httpClient.post(`${this.API_URL}/addAndAffect/${idCoach}`, training);
  }
  addEmployeeToFormation(idTraining: any , idUser: any) {
    return this.httpClient.put(`${this.API_URL}/addAndAffect/${idTraining}/${idUser}`, idTraining, idUser);
  }

  deleteTraining(idTraining: any) {
    return this.httpClient.delete(`${this.API_URL}/delete/${idTraining}`);
  }
  updateTraining(training: Training) {

    return this.httpClient.put(`${this.API_URL}/update`, training);
  }
  getAllTraining() {
    return this.httpClient.get(`${this.API_URL}/getAllTraining`);
  }
}
