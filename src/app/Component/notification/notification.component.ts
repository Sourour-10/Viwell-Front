import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Service/Notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
listNotif: any;
  constructor(private service : NotificationService) { }

  ngOnInit(): void {
this.Notifications();
  }
  Notifications(){
    this.service.getNotifications().subscribe(res =>this.listNotif=res);
    }
    
}
