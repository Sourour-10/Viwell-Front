import { Component, OnInit } from '@angular/core';
import { RateService } from '../Service/Rate/rate.service';


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
  constructor(private service: RateService) {
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
    this.service.rateEvent(1, i).subscribe();
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

