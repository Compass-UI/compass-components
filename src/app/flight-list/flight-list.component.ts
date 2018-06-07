import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
