import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventThombnailComponent } from './events/event-thombnail/event-thombnail.component';
import { FlightComponent } from './flight/flight.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { ShoppingService } from './shopping.service';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // (ngModel)
import { AuthService } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shopping',      component: FlightListComponent },
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{ path: '**', component: PageNotFoundComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    EventThombnailComponent,
    FlightComponent,
    FlightListComponent,
    LoginComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

    
  ],
  providers: [
    ShoppingService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
