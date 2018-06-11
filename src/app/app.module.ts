import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventThombnailComponent } from './events/event-thombnail/event-thombnail.component';
import { FlightComponent } from './flight/flight.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { ShoppingService } from './shopping.service';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // (ngModel)


@NgModule({
  declarations: [
    AppComponent,
    EventThombnailComponent,
    FlightComponent,
    FlightListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
