import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from '../Service/web-socket.service';
import { ChatMessage } from '../Model/ChatMessage';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../Service/User/token-storage.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html', 
 
  styleUrls: ['./chat.component.css'],
  
})
export class ChatComponent implements OnInit {

  isAddMode: boolean;
  loading = false;
  submitted = false;
  closeResult = '';
  currentUser: any;


  constructor(private tokenStorage: TokenStorageService
    , public webSocketService: WebSocketService, private modalService: NgbModal, private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
    this.webSocketService.openWebSocket();


  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    sendForm.value.message = this.currentUser.firstname + " : " + sendForm.value.message
    const chatMessageDto = new ChatMessage(sendForm.value.user, sendForm.value.message);
    
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }
  

}