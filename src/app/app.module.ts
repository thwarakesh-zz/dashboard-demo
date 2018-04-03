import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
