import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

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
    fname: '',
    lname: '',
    username: '',
    password: '',
    email: ''
  };

  constructor(
    private userService : UserService,
    private route : Router
    ) { }

  ngOnInit(): void { }

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
    } else {
      // this.userService.getUser(uname, pword)
      // this.user.username = 'test_name';
      if(this.user.username.toString() === '') {
        this.showMessage = true;
        this.message =  'Invalid username or password. Please try again';
      } else {
        this.route.navigate(['/dashboard']);
      }
    }
  }
}
