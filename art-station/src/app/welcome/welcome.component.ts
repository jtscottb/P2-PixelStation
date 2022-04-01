import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login: boolean = false;
  register: boolean = false;
  about: boolean = false;

  showLogin() {
    this.login = true;
    this.register = false;
    this.about = false;
  }
  showRegister() {
    this.login = false;
    this.register = true;
    this.about = false;
  }
  showAbout() {
    this.login = false;
    this.register = false;
    this.about = true;
  }

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  Login(status: boolean) {
    this.loggedIn.emit(status);
  }
}
