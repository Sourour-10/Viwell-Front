import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ChatComponent } from './chat/Chat.component';
import { RateColleagueComponent } from './rate-colleague/rate-colleague.component';
import { RateEventComponent } from './rate-event/rate-event.component';
import { RateCollabComponent } from './rate-collab/rate-collab.component';

import { FeedbackEventComponent } from './feedback-event/feedback-event.component';
import { FeedbackColleagueComponent } from './feedback-colleague/feedback-colleague.component';
import { MyBadgesComponent } from './Badge/my-badges/my-badges.component';

import { PollComponent } from './poll/poll.component';
import { VoteComponent } from './vote/vote.component';




const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'users',          component: UsersComponent },
//Anas Routing
{ path: 'Chat', component:ChatComponent },
{ path: 'rate-colleague', component:RateColleagueComponent },
{ path: 'rate-event', component:RateEventComponent },
{ path: 'feedback-colleague', component:FeedbackColleagueComponent },
{ path: 'feedback-event', component:FeedbackEventComponent },
{ path: 'vote', component:VoteComponent },
{ path: 'my-badges', component:MyBadgesComponent },
   //Admin
   { path: 'create-poll', component:PollComponent },
   { path: 'rate-collaboration', component:RateCollabComponent },





//End Anas Routing

    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
