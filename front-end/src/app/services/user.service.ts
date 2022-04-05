import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  User!: User;

  constructor() { }

  getUserArt(username: string) { }

  getArt() { }

  getUser(uname: string, pword: string) { }

  addUser(user: Object): boolean {
    Object.assign(this.User, user);
    console.log(this.User);
    return JSON.stringify(user) === JSON.stringify(this.User);
  }

  setUser(user: User) {
    this.User = user;
    console.log(this.User);
  }

}
