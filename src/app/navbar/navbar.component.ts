import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private loggedIn: boolean;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.getLoggedInStatus().subscribe(res => {
      this.loggedIn = res;
    })
  }

  logout(){
    this.auth.logout().subscribe(res => {
      console.log(res);
    })
  }

}
