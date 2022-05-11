import { Component, OnInit,Input } from '@angular/core';
import { RateService } from '../Service/Rate/rate.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Event } from '../Model/Event';


@Component({
  selector: 'app-rate-event',
  templateUrl: './rate-event.component.html',
  styleUrls: ['./rate-event.component.css']
})
export class RateEventComponent implements OnInit {



  imgage1!: string;
  imgage2!: string;
  imgage3!: string;
  imgage4!: string;
  imgage5!: string;

  ratted = false;
  ratting = 0; 

  @Input()event : Event;

  isAddMode: boolean;
  loading = false;
  submitted = false;
  closeResult = '';

  constructor( private modalService: NgbModal,private service: RateService) {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
    this.imgage1 = "../../assets/img/brand/empty.png";
    this.imgage2 = "../../assets/img/brand/empty.png";
    this.imgage3 = "../../assets/img/brand/empty.png";
    this.imgage4 = "../../assets/img/brand/empty.png";
    this.imgage5 = "../../assets/img/brand/empty.png";
    this.ratted = false;
    this.ratting = 0;

  }
  counter(i: number) {
    return new Array(i);
  }

  rate(i: number) {
    this.service.rateEvent(this.event.eventId,i).subscribe();
    this.ratted = true;
    this.ratting = i;

  }
  resetImage() {
    this.imgage1 = "../../assets/img/brand/empty.png"
    this.imgage2 = "../../assets/img/brand/empty.png"
    this.imgage3 = "../../assets/img/brand/empty.png"
    this.imgage4 = "../../assets/img/brand/empty.png"
    this.imgage5 = "../../assets/img/brand/empty.png"
  }

  changeImage1() {
    this.imgage1 = "../../assets/img/brand/filled.png"
    this.imgage2 = "../../assets/img/brand/empty.png"
    this.imgage3 = "../../assets/img/brand/empty.png"
    this.imgage4 = "../../assets/img/brand/empty.png"
    this.imgage5 = "../../assets/img/brand/empty.png"

  }
  changeImage2() {
    this.imgage1 = "../../assets/img/brand/filled.png"
    this.imgage2 = "../../assets/img/brand/filled.png"
    this.imgage3 = "../../assets/img/brand/empty.png"
    this.imgage4 = "../../assets/img/brand/empty.png"
    this.imgage5 = "../../assets/img/brand/empty.png"

  }
  changeImage3() {
    this.imgage1 = "../../assets/img/brand/filled.png"
    this.imgage2 = "../../assets/img/brand/filled.png"
    this.imgage3 = "../../assets/img/brand/filled.png"

    this.imgage4 = "../../assets/img/brand/empty.png"
    this.imgage5 = "../../assets/img/brand/empty.png"


  }
  changeImage4() {
    this.imgage1 = "../../assets/img/brand/filled.png"
    this.imgage2 = "../../assets/img/brand/filled.png"
    this.imgage3 = "../../assets/img/brand/filled.png"
    this.imgage4 = "../../assets/img/brand/filled.png"


    this.imgage5 = "../../assets/img/brand/empty.png"

  }
  changeImage5() {
    this.imgage1 = "../../assets/img/brand/filled.png"
    this.imgage2 = "../../assets/img/brand/filled.png"
    this.imgage3 = "../../assets/img/brand/filled.png"
    this.imgage4 = "../../assets/img/brand/filled.png"
    this.imgage5 = "../../assets/img/brand/filled.png"

  }

}

