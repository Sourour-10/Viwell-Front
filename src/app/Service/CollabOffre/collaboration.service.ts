import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Collaboration } from 'src/app/Model/Collaboration';

@Injectable({
  providedIn: 'root'
})
export class CollaborationService {

  constructor(private http:HttpClient) { }
  getCollaborations(): Observable<Collaboration[]>{
    return this.http.get<Collaboration[]>("/api/Collaboration/getAllCollaborations");

  }
  addCollaboration(collaboration: Collaboration): Observable<Collaboration>{
    return this.http.post<Collaboration>("/api/Collaboration/create", collaboration);
  }
  deleteCollab(id: number):Observable<{}>{
    return this.http.delete(`/api/Collaboration/delete/${id}`)
                      .pipe(catchError(this.handleError));
  }
  updateCollab(collab: Collaboration){
    return this.http.put(`/api/Collaboration/update`, collab)
    .pipe(catchError(this.handleError));
  }
  getCollabById(id: number){
    return this.http.get<Collaboration>(`/api/Collaboration/getColabById/${id}`)
                      .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

}
