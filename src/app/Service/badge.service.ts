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
    return this.http.get(`${this.apiUrl}/getBadgesByIdUser/${id}`)
  }

  getBadgeByName(name:string) {
    this.badge.name = name  ;
  
    //return this.http.post(`${this.apiUrl}/getBadgeByName`, this.badge);
    return this.http.post(`${this.apiUrl}getBadgeByName`,this.badge);

  }

}
