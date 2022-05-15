import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/Service/CollabOffre/offre.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  constructor(private offreService:OffreService) { }

  ngOnInit(): void {
  }

}
