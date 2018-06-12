import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ual-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  // constructor(private username: string, private password: string) { }
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  handleSubmit(){
    alert(`${this.username} with ${this.password}`);
  }
  handleCancel(){
    alert('Cancelling...');
  }
  login(form){
    console.log(form);
    // alert(form);
  }
  sampleData(){
    this.username = '123';
    this.password = 'passx';
  }

}
