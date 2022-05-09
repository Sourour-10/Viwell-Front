import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/Service/Comment/comment.service';
import { Comment } from 'src/app/Model/Comment';

@Component({
  selector: 'app-list-reply',
  templateUrl: './list-reply.component.html',
  styleUrls: ['./list-reply.component.css']
})
export class ListReplyComponent implements OnInit {
  ListReplies : Comment[];
@Input() CommentCommentedId : number;
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getRepliesByComment(this.CommentCommentedId).subscribe(
      (data: Comment[]) => this.ListReplies = data);
  }

}
