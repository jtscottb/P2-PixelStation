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
    email: '',
    role: ''
  };

  constructor() { }

  getUserArt(username: string) { }

  getArt() { }

  getUser(uname: string, pword: string) { }

  addUser(User: any) { }

  setUser(user: any) {
    this.User = user;
  }

}
