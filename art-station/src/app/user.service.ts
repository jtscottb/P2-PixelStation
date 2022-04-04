import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserArt(username: string) { }

  getArt() { }

  getUser(uname: string, pword: string) { }

  addUser(User: Object) { }
}
