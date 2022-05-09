import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Collaboration } from 'src/app/Model/Collaboration';
import { CollaborationService } from 'src/app/Service/CollabOffre/collaboration.service';

@Component({
  selector: 'app-add-collaboration',
  templateUrl: './add-collaboration.component.html',
  styleUrls: ['./add-collaboration.component.css'],
  providers: [DatePipe]
})
export class AddCollaborationComponent implements OnInit {
  colabActivities = ['Online business', 'Textile industry', 'sports','telecommunications','Hotel chain','Optics'];  
  currentDate = new Date();
  collabForm: FormGroup;
  collab: Collaboration = new Collaboration();
  isAdded = false;

  constructor(private collaborationService : CollaborationService,private datePipe: DatePipe) { }

 
  date:Date;
  ngOnInit(): void {
    this.collabForm = new FormGroup({
      companyName: new FormControl('', [Validators.required, Validators.minLength(3)]), 
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),    
      mailCompany: new FormControl('', [Validators.required, Validators.email]), 
      activity: new FormControl('', [Validators.required]),   
      date: new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'))
    });
  }

  onSubmit(){
    this.collab.description = this.collabForm.value.description;
    this.collab.companyName = this.collabForm.value.companyName;
    this.collab.mailCompany = this.collabForm.value.mailCompany; 
    this.collab.activity = this.collabForm.value.activity;
    this.collab.date = this.collabForm.value.date;
    this.save();
  }

  save(){
    this.collaborationService.addCollaboration(this.collab)
                    .subscribe(collab=> {console.log(collab);
                      this.isAdded = true;
                    }, error=>console.log(error))
  }
  resetColabForm(){
    this.isAdded = false;
    this.collabForm.reset();
  }

}
