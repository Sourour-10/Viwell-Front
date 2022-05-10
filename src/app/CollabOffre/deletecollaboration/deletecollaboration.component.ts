import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CollaborationService } from 'src/app/Service/CollabOffre/collaboration.service';

@Component({
  selector: 'app-deletecollaboration',
  templateUrl: './deletecollaboration.component.html',
  styleUrls: ['./deletecollaboration.component.css']
})
export class DeletecollaborationComponent implements OnInit {

  colabDeleteForm: FormGroup;
  errorMsg = null;
  constructor(private collaborationService : CollaborationService) { }

  ngOnInit(): void {
    this.colabDeleteForm = new FormGroup({
      collaborationId: new FormControl('', Validators.required),
    });
  }
  onSubmit(){
    this.errorMsg = null;
    this.collaborationService.deleteCollab(+this.colabDeleteForm.value.collaborationId)
                    .subscribe(collaboration=> console.log(collaboration), error=>{
                      this.errorMsg = error
                    });
  }

}
