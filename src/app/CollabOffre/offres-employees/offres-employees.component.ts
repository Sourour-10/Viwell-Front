import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/Model/Offer';
import { OffreService } from 'src/app/Service/CollabOffre/offre.service';

@Component({
  selector: 'app-offres-employees',
  templateUrl: './offres-employees.component.html',
  styleUrls: ['./offres-employees.component.css']
})
export class OffresEmployeesComponent implements OnInit {
  ListOffre : Offer[];

  constructor(private offreService :OffreService) { }

  ngOnInit(): void {
    this.offreService.getOffers().subscribe(
      (data: Offer[]) => this.ListOffre = data);
  }

}
