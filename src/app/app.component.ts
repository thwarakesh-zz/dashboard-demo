import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loggedIn: boolean;
  sideMenu_hidden = true;
  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    this.loggedIn = true; // Used to change the loggedin view during development
    this.auth.getLoggedInStatus().subscribe(res => {
      this.loggedIn = res;
    });
  }

  toggleMenu() {
    console.log('Sidemenu toggled!');
    if (this.sideMenu_hidden) {
      this.sideMenu_hidden = false;
    } else {
      this.sideMenu_hidden = true;
    }

    console.log(this.sideMenu_hidden);
  }
}
