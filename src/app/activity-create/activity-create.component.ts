import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../Model/Activity';
import { ActivityService } from '../Service/Activity/activity-service.service';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.css']
})
export class ActivityCreateComponent implements OnInit {

  activity: Activity = new Activity();
  constructor(private activityService: ActivityService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addActivity(){
    this.activity.nbrLikes=0;
    this.activity.rating=0;
    this.activity.image="activity.jpg";
    this.activity.date=new Date();
    console.log("event"+this.activity);
    this.activityService.addActivity(this.activity).subscribe( data =>{
      console.log(data);
      this.goToActivityList();
    },
    error => console.log(error));
  }

  goToActivityList(){
    this.router.navigate(['/activity']);
  }
  
  onSubmit(){
    console.log(this.activity);
    this.addActivity();
  }

}
