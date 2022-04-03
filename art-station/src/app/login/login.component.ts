import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = '';
  showMessage: boolean = false;
  showUnameMessage: boolean = false;
  showPwordMessage: boolean = false;
  user = {
    username: null,
    password: null
  };

  constructor(private userService : UserService) { }

  ngOnInit(): void { }

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  Login() {
    this.loggedIn.emit(true);
  }

  onSubmit(uname: string, pword: string) {
    this.showMessage = false;
    this.showUnameMessage = false;
    this.showPwordMessage = false;
    if(uname == '') {
      this.showUnameMessage = true;
      this.message = 'You must provide a username';
    } else if(pword == '') {
      this.showPwordMessage = true;
      this.message = 'You must provide a password';
    } else if(this.user.username == null) {
      this.showMessage = true;
      this.message =  'Invalid username or password. Please try again.';
    } else {
      this.Login();
    }
  }
}
