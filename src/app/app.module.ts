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
import { HttpClientModule } from '@angular/common/http';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './Post/add-post/add-post.component';
import { DetailPostComponent } from './Post/detail-post/detail-post.component';
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


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    NewsfeedComponent,
    PostComponent,
    AddPostComponent,
    DetailPostComponent,
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
    SwitchsubjectRecComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
