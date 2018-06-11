import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingService {

  constructor() { }

  // getFlights(): Observable<any>{
    getFlights(): any{
    return {
        flights: [
          {"from": "ORD", "to": "SFO", "flight": 124},
          {"from": "WAS", "to": "ORD", "flight": 48},
          {"from": "DXB", "to": "YYZ", "flight": 973},
        ]
    }
  }
}
