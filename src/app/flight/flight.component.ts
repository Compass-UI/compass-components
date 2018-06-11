import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ual-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() flights: any;

  @Output() childClicked = new EventEmitter();

}
