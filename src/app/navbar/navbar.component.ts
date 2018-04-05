import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;
  user: string;

  constructor(public auth: AuthService, public cookieService: CookieService) { }

  ngOnInit() {
    this.auth.getLoggedInStatus().subscribe(res => {
      this.loggedIn = res;
    });

    this.auth.getUser().subscribe(res => {
      this.user = res;
    });

    if (this.cookieService.get('user')) {
      this.loggedIn = true;
      this.user = this.cookieService.get('user');
    }
  }

  logout() {
    this.auth.logout().subscribe(res => {
      console.log('logged out!');
    });
  }

}
