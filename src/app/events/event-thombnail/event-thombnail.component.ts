import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-thombnail',
  templateUrl: './event-thombnail.component.html',
  styleUrls: ['./event-thombnail.component.css']
})
export class EventThombnailComponent implements OnInit {

  event = {
      data: 'Event Data',
      time: new Date(),
      price: 900,
    }
  constructor(/* public event: object*/) { }

  ngOnInit() {
  }

}
