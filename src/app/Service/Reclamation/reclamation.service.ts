import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Reclamation } from 'src/app/Model/Reclamation';
import { TokenStorageService } from '../User/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http:HttpClient,private token :TokenStorageService) { }
  public get currentuser(): any{
    return this.token.getUser;
  }

  getReclamations(): Observable<Reclamation[]>{

    //const headers = new HttpHeaders().set('Content-Type', 'application/json;');
    //headers.set('Content-Length', '140317'); { headers }
    return this.http.get<Reclamation[]>("/api/Reclamation/getAllReclamations");

  }

  addReclamation(num:number,complaintSubject:string,Content:string): Observable<string>{
    return this.http.post<string>("/api/Reclamation/create/"+num+"/"+this.currentuser().id+"/"+complaintSubject, Content);
  }
  deleteReclamation(id: number):Observable<{}>{
    return this.http.delete(`/api/Reclamation/delete/${id}`)
                      .pipe(catchError(this.handleError));
  }
  updateReclamation(Reclamation: Reclamation){
    return this.http.put(`/api/Reclamation/update`, Reclamation)
    .pipe(catchError(this.handleError));
  }
  getReclamationById(id: number){
    return this.http.get<Reclamation>(`/api/Reclamation/getReclamationById/${id}`)
                      .pipe(catchError(this.handleError));
  }

  complaintsSystemDecision(){
    return this.http.get(`/api/Reclamation/complaintsSystemDecision/${this.currentuser().id}`)
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
