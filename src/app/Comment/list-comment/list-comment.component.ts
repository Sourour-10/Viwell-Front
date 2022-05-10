import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/Model/Comment';
import { CommentService } from 'src/app/Service/Comment/comment.service';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
  @Input() postCommentedId:number;
  ListComment : Comment[];
  ListReplies : Comment[];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments(this.postCommentedId).subscribe(
      (data: Comment[]) => this.ListComment = data);
    
  }
  getReplies(commentId:number){
    this.commentService.getRepliesByComment(commentId).subscribe(
      (data: Comment[]) => this.ListReplies = data);
  }

}
