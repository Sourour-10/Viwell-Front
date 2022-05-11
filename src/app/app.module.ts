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
import { AssignBadgeToUserComponent } from './Component/assign-badge-to-user/assign-badge-to-user.component';


import { AddCommentComponent } from './Comment/add-comment/add-comment.component';
import { ListCommentComponent } from './Comment/list-comment/list-comment.component';
import { AddReplyComponent } from './Comment/add-reply/add-reply.component';
import { ListReplyComponent } from './Comment/list-reply/list-reply.component';
import { AddReactComponent } from './React/add-react/add-react.component';
import { MyReactComponent } from './React/my-react/my-react.component';
import { AddreactCommentComponent } from './React/addreact-comment/addreact-comment.component';
import { AddphotopostComponent } from './Post/addphotopost/addphotopost.component';
import { SharePostComponent } from './Post/share-post/share-post.component';
import { AddCollaborationComponent } from './CollabOffre/add-collaboration/add-collaboration.component';
import { CollaborationsComponent } from './CollabOffre/collaborations/collaborations.component';
import { DeletecollaborationComponent } from './CollabOffre/deletecollaboration/deletecollaboration.component';
import { AddOfferComponent } from './CollabOffre/add-offer/add-offer.component';
import { AddRreclamationComponent } from './Reclamation/add-rreclamation/add-rreclamation.component';
import { SwitchsubjectRecComponent } from './Reclamation/switchsubject-rec/switchsubject-rec.component';
import { NavBarBackofficeComponent } from './Component/nav-bar-backoffice/nav-bar-backoffice.component';
import { SideBarBackComponent } from './Component/side-bar-back/side-bar-back.component';
import { GoogleProfileComponent } from './Component/google-profile/google-profile.component';
import { ListPollFrontComponent } from './Component/list-poll-front/list-poll-front.component';
import { ArticleComponent } from './article/article.component';
import { SubjectComponent } from './subject/subject.component';
import { ResponseComponent } from './response/response.component';
import { ArticleFrontComponent } from './article-front/article-front.component';
import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventProposeComponent } from './event-propose/event-propose.component';
import { EventBacklistComponent } from './event-backlist/event-backlist.component';
import { EventBackdetailsComponent } from './event-backdetails/event-backdetails.component';
import { EventFrontdetailsComponent } from './event-frontdetails/event-frontdetails.component';
import { ListActivityComponent } from './list-activity/list-activity.component';
import { ActivityCreateComponent } from './activity-create/activity-create.component';
import { ActivityBackdetailsComponent } from './activity-backdetails/activity-backdetails.component';
import { EventFrontlistComponent } from './event-frontlist/event-frontlist.component';

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
    TopEmployeesComponent,

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
    AssignBadgeToUserComponent,

    AddCommentComponent,
    ListCommentComponent,
    AddReplyComponent,
    ListReplyComponent,
    AddReactComponent,
    MyReactComponent,
    AddreactCommentComponent,
    AddphotopostComponent,
    SharePostComponent,
    AddCollaborationComponent,
    CollaborationsComponent,
    DeletecollaborationComponent,
    AddOfferComponent,
    AddRreclamationComponent,
    SwitchsubjectRecComponent,
    PollWinnerComponent,
    EventFeedBacksComponent,
    NavBarBackofficeComponent,
    SideBarBackComponent,
    GoogleProfileComponent,
    ListPollFrontComponent,

    ArticleComponent,
    SubjectComponent,
    ResponseComponent,
    ArticleFrontComponent,

    DiscountComponent,

    TeamComponent,
    MemberComponent,
    CategoryComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    CategoryDetailsComponent,
    EventCreateComponent,
    EventProposeComponent,
    EventBacklistComponent,
    EventBackdetailsComponent,
    EventFrontdetailsComponent,
    ListActivityComponent,
    ActivityCreateComponent,
    ActivityBackdetailsComponent,
    EventFrontlistComponent,

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
'73195531714-l801elv0bompsomcmr38f79ct8ciah41.apps.googleusercontent.com'            )
          },

        ]
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
