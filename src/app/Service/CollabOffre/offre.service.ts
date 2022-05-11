import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Collaboration } from 'src/app/Model/Collaboration';
import { Offer } from 'src/app/Model/Offer';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) { }
  getOffers(): Observable<Offer[]>{
    return this.http.get<Offer[]>("/api/Offer/getAllOffers");

  }
  addOffer(Offer: Offer): Observable<Offer>{
    return this.http.post<Offer>("/api/Offer/create", Offer);
  }
  deleteOffer(id: number):Observable<{}>{
    return this.http.delete(`/api/Offer/delete/${id}`)
                      .pipe(catchError(this.handleError));
  }
  updateOffer(Offer: Offer){
    return this.http.put(`/api/Offer/update`, Offer)
    .pipe(catchError(this.handleError));
  }
  getOfferById(id: number){
    return this.http.get<Offer>(`/api/Offer/getOffreById/${id}`)
                      .pipe(catchError(this.handleError));
  }

  getColabByOffer(id: number){
    return this.http.get<Collaboration>(`/api/Offer/getColabByOffer/${id}`)
    .pipe(catchError(this.handleError));
  }

  createOfferByConvention(){
    return this.http.put(`/api/Offer/createOfferByConvention`,null)
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
