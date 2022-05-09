import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { DetailPostComponent } from './Post/detail-post/detail-post.component';
import { PostComponent } from './post/post.component';
import { AddCollaborationComponent } from './CollabOffre/add-collaboration/add-collaboration.component';
import { DeletecollaborationComponent } from './CollabOffre/deletecollaboration/deletecollaboration.component';
import { CollaborationsComponent } from './CollabOffre/collaborations/collaborations.component';


const routes: Routes =[
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
    { path: 'collabs',             component: CollaborationsComponent }


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
