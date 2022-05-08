import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { BadgeService } from 'src/app/Service/badge.service';

@Component({
  selector: 'app-liste-badge',
  templateUrl: './liste-badge.component.html',
  styleUrls: ['./liste-badge.component.css']
})
export class ListeBadgeComponent implements OnInit {

  constructor(private Service:BadgeService ) { }
badges =null ;
  ngOnInit(): void {
    this.getbadges()
  }

  getbadges(){
    this.Service.ListBadges().subscribe(res =>this.badges=res)
  }
  deleteBadge(id: any) {
    const user = this.badges.find(x => x.id === id);
  
    this.Service.deleteBadge(id)
        .pipe(first() )
        .subscribe(() => {this.badges = this.badges.filter(x => x.id !== id);
          window.location.reload();
        }
        );
}
  
}
