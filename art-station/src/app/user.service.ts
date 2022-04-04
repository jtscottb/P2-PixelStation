import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  User = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor() { }

  getUserArt(username: string) { }

  getArt() { }

  getUser(uname: string, pword: string) { }

  addUser(User: Object) { }

  setUser(user: any) {
    this.User = user;
    console.log(this.User);
  }

}
