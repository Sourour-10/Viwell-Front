import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
//import * as dayjs from 'dayjs';

import { UserListComponent } from './Component/user-list/user-list.component';

import { NotificationComponent } from './Component/notification/notification.component';
import { CompleteProfileComponent } from './Component/complete-profile/complete-profile.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { LinkedinLoginResponseComponent } from './login/linkedin/linkedin-login-response/linkedin-login-response.component';

import { ProfileFriendComponent } from './profile-friend/profile-friend.component';
import { MyFeedBacksComponent } from './my-feed-backs/my-feed-backs.component';

import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './Post/add-post/add-post.component';
import { DetailPostComponent } from './Post/detail-post/detail-post.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailsUserComponent } from './Component/details-user/details-user.component';
import { AddPhotoComponent } from './Component/add-photo/add-photo.component';
import { TeamComponent } from './Component/team/team.component';
import { MemberComponent } from './Component/member/member.component';
import { CoachComponent } from './coach/coach.component';
import { TrainingComponent } from './training/training.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { QuestionFrontComponent } from './question-front/question-front.component';
import { WelcomeQuizComponent } from './welcome-quiz/welcome-quiz.component';

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

    NotificationComponent,
    CompleteProfileComponent,
    ResetPasswordComponent,
    LinkedinLoginResponseComponent,
  

    VoteComponent,
    NotificationComponent,
    CompleteProfileComponent,
    ProfileFriendComponent,
    MyFeedBacksComponent,
   
    NewsfeedComponent,
    PostComponent,
    AddPostComponent,
    DetailPostComponent,
    DetailsUserComponent,
    AddPhotoComponent,
    TeamComponent,
    MemberComponent,
    CoachComponent,
    TrainingComponent,
    QuizComponent,
    QuestionComponent,
    QuestionFrontComponent,
    WelcomeQuizComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule

  ],
  providers:[AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
