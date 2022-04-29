import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from '../Model/User';



@Injectable({
  providedIn: 'root'
})
export class AppService {
 
   
  
  /*public logIn(user: User){



    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa( user.userName+ ':' + user.password);
    

  
    const options = {
      headers: new HttpHeaders().append('Accept', 'application/json'),
      params: new HttpParams().append("Authorization", "Basic " + base64Credential)
    }
    

    return this.http.get('http://localhost:8089/User/user',   options).forEach
      ((response: Response) => {
      // login successful if there's a jwt token in the response
      let user = response.json();// the returned user object is a principal object
      if (user) {
        // store user details  in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    });
  }

  /*logOut() {
    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL+"logout",{})
      .forEach((response: Response) => {
        localStorage.removeItem('currentUser');
      });

  }*/
  authenticated = false;
  
  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        return this.http.get(`http://localhost:8089/User/user`, {headers: headers }).subscribe(response => {
            if (response['name']) {
                this.authenticated = true;
               // localStorage.setItem(User.name);

            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }}

  /*  login2(username : string , password : string){
        const headers= new HttpHeaders({Authorization:'Basic'+btoa(username+".."+password)})
        return this.http.get('http://localhost:8089/User/user',{headers: headers , responseType:'tex'as'json'});
      }

      authenticationService(username: String, password: String) {
        return this.http.get('http://localhost:8089/User/getUserConnected',
          { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
            this.username = username;
            this.password = password;
            this.registerSuccessfulLogin(username, password);
          }));
      }
    
      createBasicAuthToken(username: String, password: String) {
        return 'Basic ' + window.btoa(username + ":" + password)
      }
    
      registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
      }
    
      logout() {
        sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        this.username = null;
        this.password = null;
      }
    
      isUserLoggedIn() {
        let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
      }
    
      getLoggedInUserName() {
        let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
      }*/

