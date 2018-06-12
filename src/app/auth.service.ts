import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor() { }

  loginUser(username: string, password: string){
    this.currentUser = {
      id: 1,
      firstName: 'David',
      lastName: 'Shams',
      ussername: 'david'
    }
  }
  isAuthenticated(){
    return !!this.currentUser;
  }

}
