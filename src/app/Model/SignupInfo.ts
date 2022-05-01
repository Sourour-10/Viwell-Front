export class SignupInfo {
  username: string;
  password: string;
  lastname: string;
  firstname: string;
  email: string;
 role: string[];
cin:number;
birthdate:Date;
phoneNumber:number;




  constructor(
    username: string,
    password: string,
    lastname: string,
    firstname: string,
    email: string,
    cin:number,
birthdate:Date,
phoneNumber:number,

    //role:string[]
    
  ) {
    this.username = username;
    this.password = password;
    this.lastname = lastname;
    this.firstname = firstname;
    this.email=email;
    this.phoneNumber=phoneNumber;
    this.cin=cin;
    this.birthdate=birthdate;
   this.role=['EMPLOYEE'];
  }
}
