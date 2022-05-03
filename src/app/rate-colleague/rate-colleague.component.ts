import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RateService } from '../Service/Rate/rate.service';

@Component({
  selector: 'app-rate-colleague',
  templateUrl: './rate-colleague.component.html',
  styleUrls: ['./rate-colleague.component.css']
})
export class RateColleagueComponent implements OnInit {
  isAddMode: boolean;
  loading = false;
  submitted = false;
  closeResult = '';
  
  imgage1!: string;
  imgage2!: string;
  imgage3!: string;
  imgage4!: string;
  imgage5!: string;

  ratted = false;
  ratting = 0;


  constructor(private service: RateService, private modalService: NgbModal ,  private route: ActivatedRoute ,
    private router: Router) {}

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
    this.service.rateColleague(1, i).subscribe();
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
