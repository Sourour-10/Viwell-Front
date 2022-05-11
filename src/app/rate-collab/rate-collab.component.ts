import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Collaboration } from '../Model/Collaboration';
import { RateService } from '../Service/Rate/rate.service';


@Component({
  selector: 'app-rate-collab',
  templateUrl: './rate-collab.component.html',
  styleUrls: ['./rate-collab.component.css']
})
export class RateCollabComponent implements OnInit {
 @Input() collab : Collaboration ;
  imgage1!: string;
  imgage2!: string;
  imgage3!: string;
  imgage4!: string;
  imgage5!: string;

  ratted = false;
  ratting = 0;

  constructor(private modalService: NgbModal,private service: RateService ) {
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
  closeResult='';
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `closed with: ${result}`;
    }, (reason) => {
      this.closeResult =` Dismissed ${this.getDismissReason(reason)}`;
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
  
  counter(i: number) {
    return new Array(i);
  }

  rate(i: number) {
    this.service.rateCollaboration(this.collab.collaborationId,i).subscribe();
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