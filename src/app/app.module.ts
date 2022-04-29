import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { PollComponent } from './poll/poll.component';
import { RateColleagueComponent } from './rate-colleague/rate-colleague.component';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './Service/app.service';
import { RateCollabComponent } from './rate-collab/rate-collab.component';
import { RateEventComponent } from './rate-event/rate-event.component';
import { FeedbackEventComponent } from './feedback-event/feedback-event.component';
import { FeedbackColleagueComponent } from './feedback-colleague/feedback-colleague.component';
import { MyBadgesComponent } from './Badge/my-badges/my-badges.component';
import { ChatComponent } from './chat/chat.component';
import { GetPhotoComponent } from './get-photo/get-photo.component';
import { VoteComponent } from './vote/vote.component';
import * as dayjs from 'dayjs';

import { UserListComponent } from './Component/user-list/user-list.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { NotificationComponent } from './Component/notification/notification.component';
import { CompleteProfileComponent } from './Component/complete-profile/complete-profile.component';
import { ProfileFriendComponent } from './profile-friend/profile-friend.component';


export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PollComponent,
    RateColleagueComponent,
    RateCollabComponent,
    RateEventComponent,
    FeedbackEventComponent,
    FeedbackColleagueComponent,
    MyBadgesComponent,
    ChatComponent,
    GetPhotoComponent,
    UserListComponent,
    VoteComponent,
    ResetpasswordComponent,
    NotificationComponent,
    CompleteProfileComponent,
    ProfileFriendComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,


  ],
  providers:[AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
