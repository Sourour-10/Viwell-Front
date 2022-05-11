import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/Model/Reclamation';
import { ReclamationService } from 'src/app/Service/Reclamation/reclamation.service';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent implements OnInit {
  ListReclamation : Reclamation[];
  deleteMsg:string = "";

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.reclamationService.getReclamations().subscribe(
      (data: Reclamation[]) => this.ListReclamation = data);
  }
  onClickDelete(recId: number){
    this.reclamationService.deleteReclamation(recId)
    .subscribe(responseData=> {
        this.deleteMsg = 'Successfully deleted';
        // get user records after deletion
        this.reclamationService.getReclamations().subscribe(data =>{  
          console.log(data);
          this.ListReclamation = data;  
      })  
    }, error=>{
        this.deleteMsg = error
    });
  }
  complaintsSystemDecision(){
    this.reclamationService.complaintsSystemDecision().subscribe(responseData=> {

      // get user records after deletion
      this.reclamationService.getReclamations().subscribe(data =>{  
        console.log(data);
        console.log("complaint sys");
        this.ListReclamation = data;  
    })  
  })
  }

}
