import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Collaboration } from 'src/app/Model/Collaboration';
import { CollaborationService } from 'src/app/Service/CollabOffre/collaboration.service';
import { OffreService } from 'src/app/Service/CollabOffre/offre.service';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.css'],
  providers: [DatePipe]
})
export class CollaborationsComponent implements OnInit {
  collabs: Collaboration[];  
  colab: Collaboration;
  deleteMsg:string = "";
  colabActivities = ['Online business', 'Textile industry', 'sports','telecommunications','Hotel chain','Optics'];  
  @ViewChild('closebutton') closebutton;
  offerByconvention:boolean = false;

  constructor(private  offreService:OffreService,private collaborationService : CollaborationService,private modalService: NgbModal, private datePipe: DatePipe) { }

  ngOnInit(): void {
    console.log('All collab ')
    this.collaborationService.getCollaborations().subscribe(data =>{  
        console.log(data);
        this.collabs = data;  
    })  

  }

  openVerticallyCentered(content,colabId:number) {
    this.modalService.open(content, { centered: true });
        // Get user data for the selected user
        this.collaborationService.getCollabById(colabId)
        .subscribe(responseData=> {
          this.colab = responseData;
          console.log("mybaby ekhdem ayy " +this.colab.collaborationId);
          this.prepareUpdateForm();
        });
  }

  onClickDelete(colabId: number){
    this.collaborationService.deleteCollab(colabId)
    .subscribe(responseData=> {
        this.deleteMsg = 'Successfully deleted';
        // get user records after deletion
        this.collaborationService.getCollaborations().subscribe(data =>{  
          console.log(data);
          this.collabs = data;  
      })  
    }, error=>{
        this.deleteMsg = error
    });
  }

  colabUpdateForm = new FormGroup({
    collaborationId: new FormControl({value:'', disabled:true}),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),  
    companyName: new FormControl('', [Validators.required, Validators.minLength(3)]),   
    mailCompany: new FormControl(''), 
    activity: new FormControl(''),   
    date: new FormControl('')
  });


  onClickUpdate(colabId: number){
    // Get user data for the selected user
    this.collaborationService.getCollabById(colabId)
    .subscribe(responseData=> {
      this.colab = responseData;
      console.log(this.colab);
      this.prepareUpdateForm();
    });
  }

      // Use setValue() method to set the values
  // for selected user record
  prepareUpdateForm(){
    this.colabUpdateForm.setValue({
      collaborationId: this.colab.collaborationId,
      description: this.colab.description,
      companyName: this.colab.companyName,
      mailCompany: this.colab.mailCompany,
      activity: this.colab.activity,
      date: this.datePipe.transform(this.colab.date, 'yyyy-MM-dd')
    });
  }



  onSubmit(){
   
      // To get data from a disabled input element
     // this.colab.collaborationId = this.colabUpdateForm.getRawValue().id;
      this.colab.companyName = this.colabUpdateForm.value.companyName;
      this.colab.description = this.colabUpdateForm.value.description;
      this.colab.mailCompany = this.colabUpdateForm.value.mailCompany; 
      this.colab.activity = this.colabUpdateForm.value.activity;
      this.colab.date = this.colabUpdateForm.value.date;
      //console.log("USER for update"+ user.userId);
      this.collaborationService.updateCollab(this.colab).subscribe(responseDate=>{
        // to close the modal
        this.closebutton.nativeElement.click();
        // Get the updated list
        this.collaborationService.getCollaborations().subscribe(data =>{  
          //console.log(data);
          this.collabs = data;  
        })  
      }, 
      error=> console.log(error));
  }

  addingoffers(){
    return this.offreService.createOfferByConvention().subscribe()  ;
  }
  counter(i: number) {
    return new Array(i);
  }

}


