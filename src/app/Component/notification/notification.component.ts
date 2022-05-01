import { Component, OnInit } from "@angular/core";
import { first } from "rxjs";
import { NotificationService } from "src/app/Service/Notification/notification.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
})
export class NotificationComponent implements OnInit {
  listNotif: any;
  notifications = null;
  notif: any;
  listNonViewed: any;
  constructor(private service: NotificationService) {}

  ngOnInit(): void {
    this.NumbNotification();
    this.Notifications();
    this.NotificationNonViewed();
  }
  Notifications() {
    this.service.getNotifications().subscribe((res) => (this.listNotif = res));
  }
  NotificationNonViewed() {
    this.service
      .getNonViewedNotifications()
      .subscribe((res) => (this.listNonViewed = res));
  }

  NumbNotification() {
    this.service
      .NonViewedNotificationNum()
      .subscribe((res) => (this.notif = res));
  }
  Update(id: any) {
    this.service.updateNotification(id).subscribe()
  window.location.reload();
  }
}
