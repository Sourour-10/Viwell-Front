import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../Model/Post';
import { React } from '../Model/React';
import { Reaction } from '../Model/React';
import { PostServiceService } from '../Service/Post/post-service.service';
import { ReactfeedService } from '../Service/React/reactfeed.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  ListPost: Post[];
  DateAujourdhui:  Date = new Date() ;
  react : React ;
  pathReact: string;
  post : any ;

  constructor(private postService: PostServiceService,private router: Router,private reactfeedService:ReactfeedService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data: Post[]) => this.ListPost = data);
  }
  addReactPost(i:number){
    //i est lid de post
    this.react = new React();
    this.react.reaction= Reaction.LIKE;

    this.react.PostLike=this.ListPost[i];
this.pathReact="/"+1+"/"+this.ListPost[i]+"/"+1;

    this.save();
  }
  save(){                   

    this.reactfeedService.addReactToPost("/0/1/1",this.react)
                    .subscribe(react=> {console.log(React);
                      
                    }, error=>console.log(error))
  }

  }

  