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

  constructor(
    private userService : UserService,
    private route : Router
    ) { }

  ngOnInit(): void { }

  onSubmit() {
    this.showMessage = false;
    this.showUnameMessage = false;
    this.showPwordMessage = false;
    if(this.uname == '') {
      this.showUnameMessage = true;
    }
    if(this.pword == '') {
      this.showPwordMessage = true;
    } else {
      var user = {
        fname: '',
        lname: '',
        username: '',
        password: this.pword,
        email: ''
      };
      // this.userService.getUser(uname, pword)
      // this.user.username = 'test_name';
      if(user.username.toString() === '') {
        this.showMessage = true;
      } else {
        this.route.navigate(['/dashboard']);
      }
    }
  }
}
