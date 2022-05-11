import { Component, Input, OnInit } from '@angular/core';
import {FeedBackService} from '../Service/feed-back.service' ;
import {FeedBack} from '../Model/FeedBack' ;
import { User } from '../Model/User';
import { TokenStorageService } from '../Service/User/token-storage.service';
import { first } from 'rxjs';



@Component({
  selector: 'app-my-feed-backs',
  templateUrl: './my-feed-backs.component.html',
  styleUrls: ['./my-feed-backs.component.css']
})


export class MyFeedBacksComponent implements OnInit {
  listFeedBacks: any;
  

  users=null;
  constructor(private service:FeedBackService, private tokenStorage:TokenStorageService ) { }

  ngOnInit(): void {
 this.getFeedbacks();
     
  }
  public get currentUser():any{
    return this.tokenStorage.getUser;
  }

  getFeedbacks(){
    this.service.listFeedBacks(this.currentUser().id).subscribe(res =>{this.listFeedBacks=res
    console.log("listFeed backs :"+this.listFeedBacks)
    console.log("res :"+res)

    })
  }
  feedback=null;

  deleteFeedBack(id: any) {
   // const feedback = this.feedbacks.find(x => x.id === id);
  
    this.service.deletFeedback(id)
        .pipe(first() )
        .subscribe(() => {this.feedback = this.feedback.filter(x => x.id !== id)
          window.location.reload();
        }
        );
}
}
