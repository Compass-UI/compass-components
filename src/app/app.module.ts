import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventThombnailComponent } from './events/event-thombnail/event-thombnail.component';


@NgModule({
  declarations: [
    AppComponent,
    EventThombnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
