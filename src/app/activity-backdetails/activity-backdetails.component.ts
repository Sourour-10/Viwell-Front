import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../Model/Activity';
import { ActivityService } from '../Service/Activity/activity-service.service';

@Component({
  selector: 'app-activity-backdetails',
  templateUrl: './activity-backdetails.component.html',
  styleUrls: ['./activity-backdetails.component.css']
})
export class ActivityBackdetailsComponent implements OnInit {

  id: number
  activity: Activity
  constructor(private route: ActivatedRoute, private activityService: ActivityService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.activity = new Activity();
    this.activityService.getActivityById(this.id).subscribe( data => {
      this.activity = data;
    });
  }

  goToBackActivityList(){
    this.router.navigate(['/back/activity']);
  }

  deleteActivity(id: number){
    this.activityService.deleteActivity(id).subscribe( data => {
      console.log(data);
      this.goToBackActivityList();
    })
  }
}
