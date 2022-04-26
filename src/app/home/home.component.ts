import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../Service/app.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    title = 'Demo';
  greeting = {};

  constructor(private app: AppService, private http: HttpClient) {
   // http.get('http://localhost:8089').subscribe(data => this.greeting = data);
  }

   authenticated() { return this.app.authenticated; }
  ngOnInit() {}
}
