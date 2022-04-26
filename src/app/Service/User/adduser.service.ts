import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/Model/User';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SignupInfo } from 'src/app/Model/SignupInfo';
import { jwtResponse } from 'src/app/Model/jwtResponse';
import { TokenStorageService } from './token-storage.service';
import { LoginInfo } from 'src/app/Model/LoginInfo';

const httpOptions={
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

const TOKEN_KEY='AuthToken';
@Injectable({
  providedIn: 'root'
})
export class AdduserService {
private currentUserSubject:BehaviorSubject<any>;
public CurrentUser:Observable<any>;
private signupUrl='http://localhost:8089/User/Register';
private loginUrl='http://localhost:8089/User/login';
private getUserByUserName='http://localhost:8089/User/getUserbyUserName/';

  public user: Observable<User>;
  public userSubject: BehaviorSubject<User>;


  //
  changePasswordUrl:"http://localhost:4200/#/app-resetpassword/";
 
  apiUrl="http://localhost:8089/User";
 // apiuser="http://localhost:8089/User/getUserConnected";
  constructor(private http:HttpClient, private router:Router , private tokenStorage:TokenStorageService) {
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
  this.CurrentUser =this.currentUserSubject.asObservable();

  this.userSubject=new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  this.user=this.userSubject.asObservable();
  }
  public  get userValue(): User{
return this.userSubject.value;
  }
  public get currentUserValue(): any{
    return this.currentUserSubject.value;
  }
  login(loginInfo:LoginInfo){
    return this.http.post<jwtResponse>(this.loginUrl, loginInfo, httpOptions)
    .pipe(map(data=>{
      this.saveUserData(data);
      return data;
    }))
  }
  signUp(signupInfo: SignupInfo) {
    return this.http.post<jwtResponse>(this.signupUrl, signupInfo, httpOptions)
    .pipe(map(data=>{
      this.saveUserData(data);
      return data;
    }))
  }
  private saveUserData(data){
    this.tokenStorage.saveToken(data.accessToken);
    this.tokenStorage.saveUser(data);
    
  }
//UserConnected
public isLoggedIn(): boolean {
  const token: string = this.tokenStorage.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  

public getCurrentUser(): User {
  if (this.isLoggedIn()) {
    const token: string = this.tokenStorage.getToken();
    const {  userName,lastName,firstName ,mail, phoneNumber  } = JSON.parse(atob(token.split('.')[1]));
    return { userName , lastName,firstName ,mail, phoneNumber } as User;
  }
}

//UPDATE USER
update(id, params) {
  return this.http.put(`http://localhost:8089/User/update/${id}`, params)
      .pipe(map(x => {
          // update stored user if the logged in user updated their own record
          if (id == this.userValue.id) {
              // update local storage
              const user = { ...this.userValue, ...params };
              localStorage.setItem('user', JSON.stringify(user));

              // publish updated user to subscribers
              this.userSubject.next(user);
          }
          return x;
      }));
}

//getByUserName
//public getByUserName(userName : string):User {
  //return User;
//return this.http.get(this.getUserByUserName,)}



  addUser(u:User){
    return this.http.post(`${this.apiUrl}/registration`,u);
  }

  

ListUser(){
  return this.http.get(`${this.apiUrl}/getAllUsers`);
}
updateUser(u:User){
  return this.http.post(`${this.apiUrl}/registration`,u);
  
}
  resetPassword(model:any){
    let headers = new HttpHeaders({
      'changePasswordUrl':this.changePasswordUrl
    });
    let options = {headers:headers};
    let idpOptions ={
      headers: new HttpHeaders({
         "Content-Type": "application/x-www-form-urlencoded",
         "Accept": "/",
         "Cache-Control": "no-cache",
         "accept-encoding": "gzip, deflate",
         "content-length": "2337",
         "Connection": "keep-alive",
         "cache-control": "no-cache"
         }),
     withCredentials: true,
   };
    console.log(model)
    console.log(idpOptions)

    return this.http.post(`${this.apiUrl}/resetPassword`, model)

  }

  public logout(): void {
    window.sessionStorage.clear();}
}
