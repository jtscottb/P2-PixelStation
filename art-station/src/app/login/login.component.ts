import { Component,  OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showMessage: boolean = false;
  showUnameMessage: boolean = false;
  showPwordMessage: boolean = false;
  uname: string = '';
  pword: string = '';

  user = {
    firstName: '',
    lastName: '',
    username: '',
    password: this.pword,
    email: ''
  };

  constructor(
    private userService : UserService,
    private route : Router
    ) { }

  ngOnInit() { }

  onSubmit() {
    this.showMessage = false;
    this.showUnameMessage = false;
    this.showPwordMessage = false;
    if(this.uname == '') {
      this.showUnameMessage = true;
    }
    if(this.pword == '') {
      this.showPwordMessage = true;
    }
    var booleans = [this.showUnameMessage, this.showPwordMessage];
    // this.userService.getUser(uname, pword)
    // this.user.username = 'test_name';
    if(this.user.username.toString() === '') {
      if(!booleans.includes(true)) {
        this.showMessage = true;
      }
    } else {
      this.userService.setUser(this.user);
      this.route.navigate(['/dashboard']);
    }
  }

}
