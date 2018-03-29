import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.username, this.password).subscribe(res => {
      console.log(this.auth.token);
    })
  }
}
