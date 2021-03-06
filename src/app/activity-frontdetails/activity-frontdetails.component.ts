import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../Model/Activity';
import { ActivityService } from '../Service/Activity/activity-service.service';

@Component({
  selector: 'app-activity-frontdetails',
  templateUrl: './activity-frontdetails.component.html',
  styleUrls: ['./activity-frontdetails.component.css']
})
export class ActivityFrontdetailsComponent implements OnInit {

  id: number
  activity: Activity
  constructor(private route: ActivatedRoute, private employeService: ActivityService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.activity = new Activity();
    this.employeService.getActivityById(this.id).subscribe( data => {
      this.activity = data;
    });
  }

  goToBackActivityList(){
    this.router.navigate(['/activity']);
  }

}
