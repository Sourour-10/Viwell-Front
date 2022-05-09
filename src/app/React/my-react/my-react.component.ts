import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Model/Post';
import { ReactfeedService } from 'src/app/Service/React/reactfeed.service';

@Component({
  selector: 'app-my-react',
  templateUrl: './my-react.component.html',
  styleUrls: ['./my-react.component.css']
})
export class MyReactComponent implements OnInit {
  @Input() postReacted:Post;
public reaction : string="";

  constructor(private reactfeedService:ReactfeedService) { }

  ngOnInit(): void {
     //get MyREACT
 this.reactfeedService.getMyEmoji(this.postReacted.postId,1).subscribe((data) => {
  this.reaction = data;
});
console.log("my react"+this.postReacted.postId+this.reaction);
  }

}
