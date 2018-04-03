import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loggedIn: boolean;
  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    this.loggedIn = true; // Used to change the loggedin view during development
    this.auth.getLoggedInStatus().subscribe(res => {
      this.loggedIn = res;
    });
  }
}
