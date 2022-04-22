import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        return this.http.get('http://localhost:8089/User/user', {headers: headers }).subscribe(response => {
            if (response['name']) {
                this.authenticated = true;

            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }

    login2(username : string , password : string){
        const headers= new HttpHeaders({Authorization:'Basic'+btoa(username+".."+password)})
        return this.http.get('http://localhost:8089/User/user',{headers: headers , responseType:'tex'as'json'});
      }
}
