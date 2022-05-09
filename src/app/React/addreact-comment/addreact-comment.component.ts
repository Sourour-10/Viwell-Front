import { Component, Input, OnInit } from '@angular/core';
import { React, Reaction } from 'src/app/Model/React';
import { Comment } from 'src/app/Model/Comment';
import { ReactfeedService } from 'src/app/Service/React/reactfeed.service';

@Component({
  selector: 'app-addreact-comment',
  templateUrl: './addreact-comment.component.html',
  styleUrls: ['./addreact-comment.component.css']
})
export class AddreactCommentComponent implements OnInit {
@Input() CommentCommented : Comment;
react : React ;
pathReact: string;
  constructor(private reactfeedService:ReactfeedService) { }

  ngOnInit(): void {
  }
  addReactComment(reactid:number,user:number){
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

    this.react.commentLike=this.CommentCommented;
    this.pathReact="/"+reactid+"/"+this.CommentCommented.commentId+"/"+1;
    console.log(reactid);
this.saveReactToComment();
  this.refresh();
  }
  refresh(): void {
    window.location.reload();
}
  saveReactToComment(){                   

    this.reactfeedService.addReactToComment(this.pathReact,this.react)
                    .subscribe();
  }
}
