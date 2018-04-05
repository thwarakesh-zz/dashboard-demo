import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FusionChart Requiements
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
// import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';
import { FusionChartsModule } from 'angular4-fusioncharts';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageService } from './message.service';
import { ChartBar3dComponent } from './chart-bar3d/chart-bar3d.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CookieService } from 'angular2-cookie/services/cookies.service';

FusionChartsModule.fcRoot(FusionCharts, Charts, ocean);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    LoginComponent,
    DashboardComponent,
    ChartBar3dComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FusionChartsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    AuthService,
    MessageService,
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
