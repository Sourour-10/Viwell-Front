import { User } from "./User";

export enum ComplaintSubjects{
    ReportPost,
	ReportComment,
	ReportEvent,
	ReportProfile

}
export class Reclamation{
     reclamationId:number;

	 complaintSubject:ComplaintSubjects;

	 date:Date;
	 content:string;
	 state:Boolean;

	 num:number;
   
	  user:User ;
}