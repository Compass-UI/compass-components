import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventThombnailComponent } from './events/event-thombnail/event-thombnail.component';
import { FlightComponent } from './flight/flight.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { ShoppingService } from './shopping.service';


@NgModule({
  declarations: [
    AppComponent,
    EventThombnailComponent,
    FlightComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
