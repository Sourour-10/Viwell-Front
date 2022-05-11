import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Activity } from '../Model/Activity';
import { ActivityService } from '../Service/Activity/activity-service.service';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {

  console = console;
  listActivitys: any;
  activitys: Activity[];
  closeResult!: string;
  form: boolean = false;

  constructor(private activityService: ActivityService,
    private router: Router , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllActivitys();   
  }

  private getAllActivitys(){
    this.activityService.getAllActivitys().subscribe(data => {
      this.activitys = data;
    });
  }

  UserLikesActivity(activityId: number){
    this.activityService.UserLikesActivity(activityId).subscribe(()=> {window.location.reload();});
    
  }

  getActivityById(activityId: number){
    this.router.navigate(['activity-details', activityId]);
  }

  editActivity(id: number){
    this.router.navigate(['activity/update']);
    //this.router.navigate(['activity/update', Activity]);
  }

  deleteActivity(id: number){
    this.activityService.deleteActivity(id).subscribe( data => {
      console.log(data);
      this.getAllActivitys();
    })
  }

}
