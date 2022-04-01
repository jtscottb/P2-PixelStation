import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  Login() {
    this.loggedIn.emit(true);
  }
}
