import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/Model/User';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SignupInfo } from 'src/app/Model/SignupInfo';
import { jwtResponse } from 'src/app/Model/jwtResponse';
import { TokenStorageService } from './token-storage.service';
import { LoginInfo } from 'src/app/Model/LoginInfo';
import { PasswordModel } from 'src/app/Model/PasswordModel';

const httpOptions={
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

const TOKEN_KEY='AuthToken';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class AdduserService {

private currentUserSubject:BehaviorSubject<any>;
public CurrentUser:Observable<any>;
private signupUrl='http://localhost:8089/Auth/Register';
private loginUrl='http://localhost:8089/Auth/login';
private getUserByUserName='http://localhost:8089/User/getUserbyUserName/';

  public user: Observable<User>;
  public userSubject: BehaviorSubject<User>;
  passwordModel:PasswordModel;
  userModel:User;
  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  isAuthenticated=false;


  //
  changePasswordUrl:"http://localhost:4200/#/app-resetpassword/";
 
  apiUrl="http://localhost:8089/User";
 // apiuser="http://localhost:8089/User/getUserConnected";
  constructor(private http:HttpClient, private router:Router , private tokenStorage:TokenStorageService) {
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('user'));
  this.CurrentUser =this.currentUserSubject.asObservable();

  this.userSubject=new BehaviorSubject<User>(JSON.parse(localStorage.getItem(USER_KEY)));
  this.user=this.userSubject.asObservable();
  }
  public  get userValue(): User{
return this.userSubject.value;
  }
  public get currentUserValue(): any{
    return this.currentUserSubject.value;
  }

  public get currentUser(): any{
    return this.tokenStorage.getUser;
  }
  login(loginInfo:LoginInfo){
    return this.http.post<jwtResponse>(this.loginUrl, loginInfo, httpOptions)
    .pipe(map(data=>{
      this.saveUserData(data);
     // console.log('iddddddd',this.userValue.id)
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
  public Authenticated(){
    if (this.tokenStorage.getUser){
      return this.isAuthenticated=true;
    }
    else return this.isAuthenticated=false;
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
updateuser( value: User) {
 
  return this.http.put(`http://localhost:8089/User/userUpdate/${ this.currentUser().id}`, value);
}
//UPDATE USER
public update( params) {
  this.userModel=params
console.log('azertyu'+this.currentUser().id)
//console.log("elo",params);
  return this.http.put(`http://localhost:8089/User/update/${ this.currentUser().id}`, this.userModel)
      .pipe(map(x => {
        
      //  console.log('iddddddd',this.userValue.id)
          // update stored user if the logged in user updated their own record
         
              // update local storage
              const user = { ...this.userValue, ...params };
              console.log('hknhk',user)
              localStorage.setItem(USER_KEY, JSON.stringify(user));
            

              // publish updated user to subscribers
              this.userSubject.next(user);
          
          return x;
      }));
}
//delete User
deleteUser(idUser :any){
  return this.http.delete(`http://localhost:8089/User/delete/${idUser}`);
}

/*delete(id: number) {
  return this.http.delete(`http://localhost:8089/User/delete/${id}`)
      .pipe(map(x => {
          // auto logout if the logged in user deleted their own record
          if (id == this.userValue.id) {
              this.logout();
          }
          return x;
      }));
}*/
//getByUserName
//public getByUserName(userName : string):User {
  //return User;
//return this.http.get(this.getUserByUserName,)}

LinkedinLogin(){
  return this.http.get('http://localhost:8089/User/linkedInLogin');
}

  addUser(u:User){
    return this.http.post(`${this.apiUrl}/registration`,u);
  }

  

ListUser(){
  return this.http.get(`${this.apiUrl}/getAllUsers`);
}



  public checkEmail(email: string):Observable<any>{
   this.passwordModel=new PasswordModel();
    this.passwordModel.mail=email;
    console.log('hhehehheh',email, this.passwordModel)
    return this.http.post(`${this.apiUrl}/resetPassword`,  this.passwordModel)
    /*.pipe(map(
      response=>{
        return response;
      }
    ))*/

  }
 public ResetPassword(email:string,token :string , newPassword:string):Observable<any>{
  this.passwordModel=new PasswordModel();
  this.passwordModel.mail=email;
  this.passwordModel.token=token;
  this.passwordModel.newPassword=newPassword;
    return this.http.post(`${this.apiUrl}/savePassword`, this.passwordModel).pipe(map(
      response=>{
        return response;
      }
    ))

  }

//LOGOUT
  public logout(): void {
    window.sessionStorage.removeItem("auth-user");}
//Uplodad photo
public onImageUpload(event) {
  this.uploadedImage = event.target.files[0];
}
uploadUserProfilePicture() {
const imageFormData= new FormData();
imageFormData.append('photo',this.uploadedImage)
 
this.http.post(`http://localhost:8089/Photo/upload/photo/${this.currentUser().id}`, imageFormData)
.subscribe((response) => {
  if (response=== 200) {
    this.postResponse = response;
    this.successResponse = this.postResponse.body.message;
  } else {
    this.successResponse = 'Image not uploaded due to some error!';
  }
}
);
}
    uploadProfileImage(formData: FormData): Observable<any> {
      return this.http.post<FormData>('http://localhost:8089/Photo/upload/image', formData, {
        reportProgress: true,
        observe: 'events'
      })
    }

// Anas


getFriend(id :any) :Observable<any> {


  return this.http.get(`http://localhost:8089/User/GetUserById/${id}`);

}

getUser() :Observable<any> {


  return this.http.get(`http://localhost:8089/User/GetUserById/${this.currentUser().id}`);

}

voteTo(idUserConnected:any,idCandidate:any) {

  return this.http.put(`${this.apiUrl}/voteTo/${1}/${idCandidate}`,null) ;
  
}

}
  

