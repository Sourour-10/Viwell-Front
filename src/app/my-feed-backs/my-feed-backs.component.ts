import { Component, OnInit } from '@angular/core';
import {FeedBackService} from '../Service/feed-back.service' ;
import {FeedBack} from '../Model/FeedBack' ;



@Component({
  selector: 'app-my-feed-backs',
  templateUrl: './my-feed-backs.component.html',
  styleUrls: ['./my-feed-backs.component.css']
})


export class MyFeedBacksComponent implements OnInit {
  listFeedBacks: any;
  

  constructor(private service:FeedBackService ) { }

  ngOnInit(): void {
 this.getFeedbacks();
     
  }

  getFeedbacks(){
    this.service.listFeedBacks(1).subscribe(res =>{this.listFeedBacks=res
    console.log("listFeed backs :"+this.listFeedBacks)
    console.log("res :"+res)

    })
  }
/*
  deleteFeedBack(id: any) {
    const user = this.users.find(x => x.id === id);
  
    this.service.deleteUser(id)
        .pipe(first() )
        .subscribe(() => {this.users = this.users.filter(x => x.id !== id)
        }
        );
}*/
}