import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Badge } from '../Model/Badge';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  apiUrl = "http://localhost:8089/Badge"
  constructor(private http: HttpClient) {

  }

  getAllMyBadges(id: number) {
    return this.http.get<Badge[]>(`${this.apiUrl}/getBadgesByIdUser/${id}`)
  }

}
