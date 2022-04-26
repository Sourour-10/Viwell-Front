import { Injectable } from '@angular/core';
import { User } from 'src/app/Model/User';
const TOKEN_KEY='AuthToken';
//const USERNAME_KEY='AuthUserName';
//const AUTHORITIES_KEY='AuthAutorities';
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
private roles : Array<string>=[];
  constructor() { }
  public saveToken(token :string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);

  } 

  public getToken():string{
    return sessionStorage.getItem(TOKEN_KEY);
  }

 
  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

public getUser(): any {
  return JSON.parse(sessionStorage.getItem(USER_KEY));
}
}
