import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Badge } from '../Model/Badge';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  badge: Badge;
  apiUrl: string = "/api/Badge/";

  constructor(private http: HttpClient) {
    this.badge = new Badge() ;

  }

  getAllMyBadges(id: number) {
    console.log( this.http.get(`${this.apiUrl}/getBadgesByIdUser/${id}`))

    return this.http.get(`${this.apiUrl}/getBadgesByIdUser/${id}`)
  }

  getBadgeByName(name:string) {
    this.badge.name = name  ;
  
    //return this.http.post(`${this.apiUrl}/getBadgeByName`, this.badge);
    return this.http.post(`${this.apiUrl}getBadgeByName`,this.badge);

  }

  getIdPhotoByBadge(id:number){
    console.log (this.http.get(`${this.apiUrl}/getIdPhotoByBadge/${id}`)) ;
    return (this.http.get(`${this.apiUrl}/getIdPhotoByBadge/${id}`)) ;

  }

  ListBadges(){
    return this.http.get(`${this.apiUrl}/getAllBadges`);
  }

  deleteBadge(idBadge :any){
    return this.http.delete(`${this.apiUrl}/delete/${idBadge}`);
  }
}
