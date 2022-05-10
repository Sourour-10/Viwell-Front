import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Reclamation,ComplaintSubjects } from 'src/app/Model/Reclamation';
import { ReclamationService } from 'src/app/Service/Reclamation/reclamation.service';

@Component({
  selector: 'app-add-rreclamation',
  templateUrl: './add-rreclamation.component.html',
  styleUrls: ['./add-rreclamation.component.css'],
  providers: [DatePipe]
})
export class AddRreclamationComponent implements OnInit {

  /**
   * 
   * @param reclamationService      reclamationId:number;

	 ComplaintSubject:ComplaintSubjects;

	 date:Date;
	 Content:string;
	 state:Boolean;

	 num:number;
   
	  user:User ;

   */
    currentDate = new Date();
  reclamationForm: FormGroup;
  reclamation: Reclamation = new Reclamation();
  isAdded = false;
  recSubject  = ['ReportPost', 'ReportComment', 'ReportEvent','ReportProfile'];

  constructor(private reclamationService: ReclamationService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.reclamationForm = new FormGroup({
      complaintSubject: new FormControl('', [Validators.required]), 
      date: new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd')),
      content: new FormControl('', [Validators.required, Validators.minLength(5)]),  

    });
  }
/**
  onSubmit(){
    switch(this.reclamationForm.value.complaintSubject){
      case 'ReportPost':
        this.reclamation.complaintSubject = ComplaintSubjects.ReportPost;
      case 'ReportComment':
        this.reclamation.complaintSubject = ComplaintSubjects.ReportComment;
      case 'ReportEvent':
        this.reclamation.complaintSubject = ComplaintSubjects.ReportEvent;
      case 'ReportProfile':
        this.reclamation.complaintSubject = ComplaintSubjects.ReportProfile;

    }
    this.reclamation.date = this.reclamationForm.value.date;
    this.reclamation.content = this.reclamationForm.value.content;
    this.save();
  }

 *   save(){
    UserId:number,num:number,complaintSubject:string,Content:string
    this.reclamationService.addReclamation(1,1,this.reclamationForm.value.complaintSubject,this.reclamation.content)
                    .subscribe(collab=> {console.log(collab);
                      this.isAdded = true;
                    }, error=>console.log(error))
  }
  resetColabForm(){
    this.isAdded = false;
    this.collabForm.reset();
  }
 * 
 */


}
