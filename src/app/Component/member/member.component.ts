import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reclamation } from 'src/app/Model/Reclamation';
import { User } from 'src/app/Model/User';
import { ReclamationService } from 'src/app/Service/Reclamation/reclamation.service';
import { AdduserService } from 'src/app/Service/User/adduser.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  @Input()user : User;
  users=null;

  openC:boolean = false ;
selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  imageUrl: string;

  //@Output() requested=new EventEmitter<String>();
  closeResult: string;

  //yossr rec
  recSubject  = ['ReportPost', 'ReportComment', 'ReportEvent','ReportProfile'];
  contentReportList  = ['Nudity', 'Violence', 'Harassment','Suicide or self-harm','False information', 'Undesirable content', 'Unauthorized sales','hate speech', 'Terrorism', 'Other'];
  report: Reclamation = new Reclamation();
  @ViewChild('closebutton') closebutton;
  ReportUser: User;
  
  constructor(private service:AdduserService,  private http: HttpClient,private reclamationService: ReclamationService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getImage();
    this.getusers();
  }
  
  getusers(){
    this.service.ListUser().subscribe(res =>this.users=res)
  }

  counter(i: number) {
    return new Array(i);
  }

  


getImage() {
  //Make a call to Sprinf Boot to get the Image Bytes.
  console.log("userid",this.user.userId);
  this.http.get('http://localhost:8089/User/getPhotoByUser/'+  this.user.userId,{ responseType: 'text' })
 
    .subscribe(
      res => {

        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte ;

        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        this.imageUrl= 'http://localhost:8089/User/getPhotoByUser/'+this.user.userId;

      }
    );
}


//yossr Reclamation
reclamationForm = new FormGroup({
  userId: new FormControl({value:'', disabled:true}),
  complaintSubject: new FormControl({value:'ReportProfile', disabled:true}),
  contentReport: new FormControl(''),  
});
openVerticallyCenteredReportProfile(content,userId:number) {
  this.modalService.open(content, { centered: true });
      // Get user data for the selected user
      this.service.getFriend(userId)
      .subscribe(responseData=> {
        this.ReportUser = responseData;
        
        this.prepareUpdateForm();
      });
}

  prepareUpdateForm(){
    this.reclamationForm.setValue({
      userId: this.ReportUser.userId,
      complaintSubject: 'ReportProfile',
      contentReport: 'Please select a reason',
    });
  }

  onSubmit(){
    this.report.complaintSubject = this.reclamationForm.value.complaintSubject;
    this.report.content = this.reclamationForm.value.contentReport;
      this.reclamationService.addReclamation(this.ReportUser.userId,'ReportProfile', this.report.content).subscribe(responseDate=>{
        // to close the modal
        this.closebutton.nativeElement.click();
        // Get the updated list
      }, 
      error=> console.log(error));

  }


}
