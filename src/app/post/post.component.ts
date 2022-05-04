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
  addReactPost(reactid:number,i:number,user:number){
    //i est lid de post
    this.react = new React();
    switch(reactid){
      case 0:
        this.react.reaction= Reaction.LIKE;
        break;
      case 1:
        this.react.reaction= Reaction.ADORE;
        break;
      case 2:
        this.react.reaction= Reaction.HAHA;
        break;
      case 3:
        this.react.reaction= Reaction.WOW;
        break;
      case 4:
        this.react.reaction= Reaction.CRY;
        break;
      case 5:  
      this.react.reaction= Reaction.ANGRY;
      break;
    }

    this.react.PostLike=this.ListPost[i];
    this.pathReact="/"+reactid+"/"+i+"/"+1;
    console.log(reactid);

    this.save();
  }
  save(){                   

    this.reactfeedService.addReactToPost(this.pathReact,this.react)
                    .subscribe();
  }

  }

  