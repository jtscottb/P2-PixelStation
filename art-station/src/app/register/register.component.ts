import { Component, OnInit, Type } from '@angular/core';
import { UserService } from '../user.service';

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

  constructor(private userService : UserService) { }
  
  ngOnInit(): void { }

  onSubmit(uname: string, pword: string, fname: string, lname: string, email: string) {
    this.showMessage = false;
    this.showUnameMessage = false;
    this.showPwordMessage = false;
    this.showFnameMessage = false;
    this.showLnameMessage = false;
    this.showEmailMessage = false;
    if(uname == '') {
      this.showUnameMessage = true;
      this.message = 'You must enter a username';
    } else if(pword == '') {
      this.showPwordMessage = true;
      this.message = 'You must enter a password';
    } else if(fname == '') {
      this.showFnameMessage = true;
      this.message = 'You must enter a first name';
    } else if(lname == '') {
      this.showLnameMessage = true;
      this.message = 'You must enter a last name';
    } else if(email == '') {
      this.showEmailMessage = true;
      this.message = 'You must enter an email';
    } else {
      var user = {
        username: uname,
        password: pword,
        firstName: fname,
        lastName: lname,
        email: email
      }
      // this.userService.addUser(user);
      if(!this.showMessage) {
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

}
