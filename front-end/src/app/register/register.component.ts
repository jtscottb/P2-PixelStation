import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string = '';
  text: string = '';
  showMessage: boolean = false;
  showUnameMessage: boolean = false;
  showPwordMessage: boolean = false;
  showFnameMessage: boolean = false;
  showLnameMessage: boolean = false;
  showEmailMessage: boolean = false;
  uname: string = '';
  pword: string = '';
  fname: string = '';
  lname: string = '';
  email: string = '';

  constructor(private userService : UserService) { }
  
  ngOnInit(): void { }

  onSubmit() {
    this.showMessage = false;
    this.showUnameMessage = false;
    this.showPwordMessage = false;
    this.showFnameMessage = false;
    this.showLnameMessage = false;
    this.showEmailMessage = false;
    if(this.uname == '') {
      this.showUnameMessage = true;
    }
    if(this.pword == '') {
      this.showPwordMessage = true;
    }
    if(this.fname == '') {
      this.showFnameMessage = true;
    }
    if(this.lname == '') {
      this.showLnameMessage = true;
    }
    if(this.email == '') {
      this.showEmailMessage = true;
    }
    var booleans = [this.showUnameMessage, this.showPwordMessage, this.showFnameMessage, this.showLnameMessage, this.showEmailMessage];
    var user = {
      username: this.uname.toUpperCase(),
      password: this.pword,
      firstName: this.fname.toUpperCase(),
      lastName: this.lname.toUpperCase(),
      email: this.email,
      role: ''
    }
    var success: boolean = this.userService.addUser(user);
    if(success) {
      this.showMessage = true;
      this.text = 'text-success';
      this.message = 'Successfully Registered. Please Login';
    } else if(!booleans.includes(true)) {
      this.showMessage = true;
      this.text = 'text-danger';
      this.message = 'Username is already taken.';
    }
  }

}
