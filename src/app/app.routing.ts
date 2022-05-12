import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SubjectComponent } from './subject/subject.component';
import { ArticleComponent } from './article/article.component';
import { ResponseComponent } from './response/response.component';
import { ArticleFrontComponent } from './article-front/article-front.component';
import { ResponsetoarticleComponent } from './responsetoarticle/responsetoarticle.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    //Ramzi 
    {path:"Subjects", component:SubjectComponent},
    {path:"Articles", component:ArticleComponent},
    {path:"Responses",component:ResponseComponent},
    {path:"ArticleFront",component:ArticleFrontComponent},
    
    //end Ramzi
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
