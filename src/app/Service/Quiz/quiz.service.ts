import { Injectable } from '@angular/core';
import {Coach} from '../../Model/Coach';
import {HttpClient} from '@angular/common/http';
import {Quiz} from '../../Model/Quiz';
import {Question} from '../../Model/Question';
import {UserResponse} from '../../Model/UserResponse';


@Injectable({
  providedIn: 'root'
})
export class QuizService {


  readonly API_URL = 'http://localhost:8089/quiz';

  constructor(private httpClient: HttpClient) {
  }


  addQuiz(quiz: Quiz) {
    return this.httpClient.post(`${this.API_URL}/addQuiz`, quiz);
  }

  addQuestionsForQuiz(questions: any, quizId: any) {

    return this.httpClient.put(`${this.API_URL}/addQuestions`, questions, quizId);
  }

  addQuestionForQuiz(question: Question) {

    return this.httpClient.post(`${this.API_URL}/addQuestion`, question);
  }

  updateQuiz(quiz: Quiz) {

    return this.httpClient.put(`${this.API_URL}/update`, quiz);
  }


  getQuizById(quizId: any) {
    return this.httpClient.get(`${this.API_URL}/details/${quizId}`);

  }

  getQuestionsForQuiz(quizId: any) {
    return this.httpClient.get(`${this.API_URL}/getQuestions${quizId}`);
  }

  evaluateAndUpdateResult(quizId: any, userId: any) {
    return this.httpClient.get(`${this.API_URL}/evaluate/${quizId}/${userId}`);
  }

  getAllQuiz() {
    return this.httpClient.get(`${this.API_URL}/getAllQuiz`);
  }

  deleteQuiz(quizId: any) {
    return this.httpClient.delete(`${this.API_URL}/delete/${quizId}`);
  }

  uploadAnswers(userResonse: UserResponse[]) {

    // @ts-ignore
    return this.httpClient.post(`${this.API_URL}/uploads`, userResonse);
  }

  uploadAnswer(userResonse: UserResponse) {

    return this.httpClient.post(`${this.API_URL}/upload`, userResonse);
  }


  assignQuizToUsers(quizId: any) {

    // @ts-ignore
    return this.httpClient.post(`${this.API_URL}/assign`, quizId, 0);

  }
  exportPdf(quizId: any, userId: any) {

    // @ts-ignore
    return this.httpClient.get(`${this.API_URL}/users/export/pdf/${quizId}/${userId}`);
  }

}


