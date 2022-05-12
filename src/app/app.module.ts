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
// import * as dayjs from 'dayjs';
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
import { DetailsUserComponent } from './Component/details-user/details-user.component';
import { AddPhotoComponent } from './Component/add-photo/add-photo.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListEventComponent } from './list-event/list-event.component';
import { DiscountComponent } from './discount/discount.component';
import { TeamComponent } from './Component/team/team.component';
import { MemberComponent } from './Component/member/member.component';
import { CoachComponent } from './coach/coach.component';
import { TrainingComponent } from './training/training.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { QuestionFrontComponent } from './question-front/question-front.component';
import { WelcomeQuizComponent } from './welcome-quiz/welcome-quiz.component';
import { TopEmployeesComponent } from './top-employees/top-employees.component';
import { TopPointsComponent } from './top-points/top-points.component';
import { ListPollComponent } from './list-poll/list-poll.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { ListeBadgeComponent } from './Component/liste-badge/liste-badge.component';
import { DetailBadgeComponent } from './Component/detail-badge/detail-badge.component';
import { CommonModule } from '@angular/common';
import { PollWinnerComponent } from './Component/poll-winner/poll-winner.component';
import { EventFeedBacksComponent } from './Component/event-feed-backs/event-feed-backs.component';
import { AddQuizComponent } from './quiz/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './quiz/update-quiz/update-quiz.component';
import { AddTrainingComponent } from './training/add-training/add-training.component';
import { UpdateTrainingComponent } from './training/update-training/update-training.component';
import { ListQuizFrontComponent } from './list-quiz-front/list-quiz-front.component';
import { TrainingFrontComponent } from './training-front/training-front.component';
import { UpdateQuestionComponent } from './question/update-question/update-question.component';
import { AddQuestionComponent } from './question/add-question/add-question.component';

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
    ProfileFriendComponent,
    MyFeedBacksComponent,
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
    ListEventComponent,
    DiscountComponent,
    TeamComponent,
    MemberComponent,
    CoachComponent,
    TrainingComponent,
    QuizComponent,
    QuestionComponent,
    QuestionFrontComponent,
    WelcomeQuizComponent,
    TopPointsComponent,
    ListPollComponent,
    ListeBadgeComponent,
    DetailBadgeComponent,
    PollWinnerComponent,
    EventFeedBacksComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    AddTrainingComponent,
    UpdateTrainingComponent,
    ListQuizFrontComponent,
    TrainingFrontComponent,
    UpdateQuestionComponent,
    AddQuestionComponent

  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    SocialLoginModule,
    CommonModule



  ],
  providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '113757940963-bvpijvhjgep64ge3ajnmlepgnaopmvrf.apps.googleusercontent.com'
            )
          },

        ]
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
