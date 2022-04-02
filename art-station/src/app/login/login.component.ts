import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  Login() {
    this.loggedIn.emit(true);
  }

  message: string = '';
  showMessage: boolean = false;
  onSubmit(uname: string, pword: string) {
    console.log(uname + " " + pword);
    // this.showMessage = true;
    if(this.showMessage) {
      this.message = 'Invalid username or password. Please try again';
    } else {
      this.Login();
    }
  }
}
