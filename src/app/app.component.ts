import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private loggedIn: boolean;
  constructor(public auth:AuthService){
  }

  ngOnInit(){
    this.loggedIn = true;
    this.auth.getLoggedInStatus().subscribe(res => {
      this.loggedIn = res;
    })
  }
}
