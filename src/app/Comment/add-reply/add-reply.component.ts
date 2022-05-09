import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/Service/Comment/comment.service';
import { Comment } from 'src/app/Model/Comment';

@Component({
  selector: 'app-add-reply',
  templateUrl: './add-reply.component.html',
  styleUrls: ['./add-reply.component.css']
})
export class AddReplyComponent implements OnInit {
  @Input() CommentCommentedId : number;
  replyForm: FormGroup;
  reply : Comment = new Comment();
  isAdded = false;
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.replyForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }
  save(){
    this.commentService.addReplyToComment(this.CommentCommentedId,this.reply.text)
                    .subscribe(reply=> {console.log(reply);
                      this.isAdded = true;
                    }, error=>console.log(error))
  }
  onSubmit(){
    this.reply.text = this.replyForm.value.text;
    //this.comment.date = this.currentDate;
    this.save();
    this.refresh();
  }
  refresh(): void {
    window.location.reload();
}

}
