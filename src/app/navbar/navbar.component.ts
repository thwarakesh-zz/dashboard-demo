import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;
  user: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.getLoggedInStatus().subscribe(res => {
      this.loggedIn = res;
    });

    this.auth.getUser().subscribe(res => {
      this.user = res;
    });
  }

  logout() {
    this.auth.logout().subscribe(res => {
      console.log('logged out!');
    });
  }

}
