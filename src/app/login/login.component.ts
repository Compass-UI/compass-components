import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'ual-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor(private username: string, private password: string) { }
  constructor(private username: string, private password: string) { }

  ngOnInit() {
  }
  handleSubmit(){
    alert(`${this.username} with ${this.password}`);
  }
  handleCancel(){
    alert('Cancelling');
  }

}
