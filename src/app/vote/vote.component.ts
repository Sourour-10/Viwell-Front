import { Component, OnInit } from '@angular/core';
import { PollService } from '../Service/Poll/poll.service';
import { AdduserService } from 'src/app/Service/User/adduser.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  users = null;
  checked : any ;
  msg: string ="";
  vb: any = false ;
  constructor(private service:AdduserService ,private pollService: PollService) { }

  ngOnInit(): void {
    this.getusers() ;
  }
    getusers(){
    this.service.ListUser().subscribe(res =>this.users=res)
  }

  getCurrentResult() {

    this.pollService.showCurrentResult(1).subscribe(res => {
      (this.msg = "Now you have " + JSON.stringify(res))  ;
      this.msg= this.msg + "  vote, never lose hope" ;
    })
  }
vote(){
  var radios = document.getElementsByTagName('input');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
    this.service.voteTo(1,3).subscribe(res=> this.vb=res) ;
    if(this.vb == false)
    this.msg="Sorry you've already voted" ;
    
}}

}
}
