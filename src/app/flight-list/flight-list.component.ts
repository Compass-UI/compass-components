import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ual-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flight1 = {
    from: 'ORD',
    to: 'SFO',
    date: new Date()
  }

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.flight1 = this.getFlights().flights;
  }
  // getFlights(): Observable<any>{
    getFlights(){
    return this.shoppingService.getFlights()
  }

}
