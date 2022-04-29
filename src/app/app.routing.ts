import { Component, NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/Chat.component';
import { RateColleagueComponent } from './rate-colleague/rate-colleague.component';
import { RateEventComponent } from './rate-event/rate-event.component';
import { RateCollabComponent } from './rate-collab/rate-collab.component';

import { FeedbackEventComponent } from './feedback-event/feedback-event.component';
import { FeedbackColleagueComponent } from './feedback-colleague/feedback-colleague.component';
import { MyBadgesComponent } from './Badge/my-badges/my-badges.component';

import { PollComponent } from './poll/poll.component';
import { VoteComponent } from './vote/vote.component';



import { UserListComponent } from './Component/user-list/user-list.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { NotificationComponent } from './Component/notification/notification.component';
import { CompleteProfileComponent } from './Component/complete-profile/complete-profile.component';
import { ProfileFriendComponent } from './profile-friend/profile-friend.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'register', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  //Anas Routing
  { path: 'Chat', component: ChatComponent },
  { path: 'rate-colleague', component: RateColleagueComponent },
  { path: 'rate-event', component: RateEventComponent },
  { path: 'feedback-colleague', component: FeedbackColleagueComponent },
  { path: 'feedback-event', component: FeedbackEventComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'my-badges', component: MyBadgesComponent },
  { path: 'friend-profile', component: ProfileFriendComponent },
  
  
  //Admin
  { path: 'create-poll', component: PollComponent },
  { path: 'rate-collaboration', component: RateCollabComponent },
  
  //End Anas Routing

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'userlist', component: UserListComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'completeProfile', component: CompleteProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
