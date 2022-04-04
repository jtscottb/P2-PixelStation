import { Component,  OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
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

  constructor(
    private userService : UserService,
    private route : Router
    ) { }

  ngOnInit() { }

  onSubmit() {
    this.showMessage = false;
    this.showUnameMessage = false;
    this.showPwordMessage = false;
    if(this.uname === '') {
      this.showUnameMessage = true;
    }
    if(this.pword === '') {
      this.showPwordMessage = true;
    }
    var booleans = [this.showUnameMessage, this.showPwordMessage];
    // this.userService.getUser(uname, pword)
    var user = {
      firstName: '',
      lastName: '',
      username: this.uname,
      password: this.pword,
      email: '',
      role: ''
    };
    if(user.username === '' && !booleans.includes(true)) {
      this.showMessage = true;
    } else if(!booleans.includes(true)) {
      this.userService.setUser(user);
      this.route.navigate(['/dashboard']);
    }
  }

}
