import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
