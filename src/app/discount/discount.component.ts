import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../Service/event.service';
import { TokenStorageService } from '../Service/User/token-storage.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  @Input() event: Event;

  isAddMode: boolean;
  loading = false;
  submitted = false;
  closeResult = '';
  message :any;
  setIdEvent: any;

  constructor(private service: EventService, private tokenStorage: TokenStorageService, private modalService: NgbModal) {
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }

  ngOnInit(): void { 
    //var id = this.event.eventId ; 
    this.service.discount(this.currentUser().id,1).subscribe(res=>{
      console.log("res"+res);

      this.message=res ;
    console.log(JSON.stringify(res));}  )
  }

  public get currentUser(): any {
    return this.tokenStorage.getUser;
  }

  setIdUser(id: any) {
    this.setIdEvent = id;
  }

}
