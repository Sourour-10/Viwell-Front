export class SignupInfo {
  username: string;
  password: string;
  lastname: string;
  firstname: string;
  email: string;
 role: string[];




  constructor(
    username: string,
    password: string,
    lastname: string,
    firstname: string,
    email: string,
    //role:string[]
    
  ) {
    this.username = username;
    this.password = password;
    this.lastname = lastname;
    this.firstname = firstname;
    this.email=email;
   this.role=['EMPLOYEE'];
  }
}
