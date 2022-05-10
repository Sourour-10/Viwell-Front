import { Component, NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { DetailPostComponent } from './Post/detail-post/detail-post.component';
import { PostComponent } from './post/post.component';
import { ChatComponent } from './chat/Chat.component';
import { RateColleagueComponent } from './rate-colleague/rate-colleague.component';
import { RateEventComponent } from './rate-event/rate-event.component';
import { RateCollabComponent } from './rate-collab/rate-collab.component';
import { FeedbackEventComponent } from './feedback-event/feedback-event.component';
import { MyFeedBacksComponent } from './my-feed-backs/my-feed-backs.component';
import { FeedbackColleagueComponent } from './feedback-colleague/feedback-colleague.component';
import { MyBadgesComponent } from './Badge/my-badges/my-badges.component';
import { PollComponent } from './poll/poll.component';

import { VoteComponent } from './vote/vote.component';
import { ListEventComponent } from './list-event/list-event.component';


import { UserListComponent } from './Component/user-list/user-list.component';
import { NotificationComponent } from './Component/notification/notification.component';
import { CompleteProfileComponent } from './Component/complete-profile/complete-profile.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { LinkedinLoginResponseComponent } from './login/linkedin/linkedin-login-response/linkedin-login-response.component';

import { ProfileFriendComponent } from './profile-friend/profile-friend.component';
import { TeamComponent } from './Component/team/team.component';

import {CoachComponent} from './coach/coach.component';
import {TrainingComponent} from './training/training.component';
import {QuizComponent} from './quiz/quiz.component';
import {QuestionFrontComponent} from './question-front/question-front.component';
import {WelcomeQuizComponent} from './welcome-quiz/welcome-quiz.component';

import { TopEmployeesComponent } from './top-employees/top-employees.component';
import { ListeBadgeComponent } from './Component/liste-badge/liste-badge.component';
import { ListPollComponent } from './list-poll/list-poll.component';

import { AddCollaborationComponent } from './CollabOffre/add-collaboration/add-collaboration.component';
import { DeletecollaborationComponent } from './CollabOffre/deletecollaboration/deletecollaboration.component';
import { CollaborationsComponent } from './CollabOffre/collaborations/collaborations.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'register', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  // Anas Routing
  { path: 'Chat', component: ChatComponent },
  { path: 'rate-colleague', component: RateColleagueComponent },
  { path: 'rate-event', component: RateEventComponent },
  { path: 'feedback-colleague', component: FeedbackColleagueComponent },
  { path: 'feedback-event', component: FeedbackEventComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'my-badges', component: MyBadgesComponent },
  { path: 'my-feedbacks', component: MyFeedBacksComponent },

  { path: 'friend-profile', component: ProfileFriendComponent },
  // Admin
  { path: 'coach', component: CoachComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'questions', component: QuestionFrontComponent },
  { path: 'quizn', component: WelcomeQuizComponent },
  {path: 'listBadges', component: ListeBadgeComponent},
  {path: 'listPoll', component: ListPollComponent},


  // Admin
  { path: 'create-poll', component: PollComponent },
  { path: 'rate-collaboration', component: RateCollabComponent },
  { path: 'list-event', component: ListEventComponent },
  {path: 'topEmployee', component: TopEmployeesComponent },


  // End Anas Routing

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'userlist', component: UserListComponent },
  {path: 'notification' , component: NotificationComponent},
  {path: 'completeProfile' , component: CompleteProfileComponent},
  {path: 'reset', component: ResetPasswordComponent},
  { path: 'linkedInLogin', component: LinkedinLoginResponseComponent },
  { path: 'team', component: TeamComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },


// Yossr
  { path: 'newsfeed',          component: NewsfeedComponent },
    { path: 'postdetail/:postId',          component: DetailPostComponent },
    {path: 'posts' , component: PostComponent},
    { path: '',  redirectTo: '/posts', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'newsfeed',          component: NewsfeedComponent },
    { path: 'postdetail/:postId',          component: DetailPostComponent },
    {path: 'posts' , component: PostComponent},
    { path: 'addCollab',             component: AddCollaborationComponent },
    { path: 'deleteCollab',             component: DeletecollaborationComponent },
    { path: 'collabs',             component: CollaborationsComponent },


    {path: 'userlist', component: UserListComponent},
    {path: 'notification' , component: NotificationComponent},
    {path: 'completeProfile' , component: CompleteProfileComponent},
    {path: 'reset', component: ResetPasswordComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'linkedInLogin', component: LinkedinLoginResponseComponent }

];

// @ts-ignore
// @ts-ignore
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  
  exports: [
  ],
})

export class AppRoutingModule { }
