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
      user_id: 0,
      username: this.uname.toUpperCase(),
      password: this.pword,
      fname: this.fname.toUpperCase(),
      lname: this.lname.toUpperCase(),
      email: this.email
    }
    if(!booleans.includes(true)) {
      this.userService.register(user).subscribe(obj => console.log(obj));
      this.showMessage = true;
      this.text = 'text-success';
      this.message = 'Successfully Registered. Please Login';
    } else {
      this.showMessage = true;
      this.text = 'text-danger';
      this.message = 'Username is already taken.';
    }
  }

}
