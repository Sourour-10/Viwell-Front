import { Collaboration } from "./Collaboration";

export class Offer{
     offerId:number ;
     description:string ;
     type:string ;   
     startDate!:Date ;
     endDate:Date ;
      collaboration:Collaboration;
}