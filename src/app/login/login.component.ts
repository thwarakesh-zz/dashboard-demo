import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  Message: string;

  constructor(public auth: AuthService, public message: MessageService) { }

  ngOnInit() {
    this.message.getActiveMessage().subscribe(res => {
      this.Message = res;
    });
  }

  login() {
    this.auth.login(this.username, this.password).subscribe(res => {
      console.log(this.auth.token);
    });
  }

}
