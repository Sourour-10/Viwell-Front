import { HttpClient } from '@angular/common/http';
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
  ListPost2: Post[];
  ListReact : string[];
  DateAujourdhui:  Date = new Date() ;
  react : React ;
  pathReact: string;
  post : any ;
  reaction : any;


  constructor(private postService: PostServiceService,private router: Router,private reactfeedService:ReactfeedService) {
    


   }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data: Post[]) => this.ListPost = data);
    //get react of the user connected

  }

 



  }

  