import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Model/Post';
import { React, Reaction } from 'src/app/Model/React';
import { ReactfeedService } from 'src/app/Service/React/reactfeed.service';

@Component({
  selector: 'app-add-react',
  templateUrl: './add-react.component.html',
  styleUrls: ['./add-react.component.css']
})
export class AddReactComponent implements OnInit {
  @Input() postReacted:Post;
  react : React ;
  pathReact: string;
  constructor(private reactfeedService:ReactfeedService) { }

  ngOnInit(): void {
  }

  addReactPost(reactid:number){
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

    this.react.PostLike=this.postReacted;
    this.pathReact="/"+reactid+"/"+this.postReacted.postId+"/";
    console.log(reactid);
this.saveReactToPost();
  this.refresh();
  }
  refresh(): void {
    window.location.reload();
}
  saveReactToPost(){                   

    this.reactfeedService.addReactToPost(this.pathReact,this.react)
                    .subscribe();
  }
}
