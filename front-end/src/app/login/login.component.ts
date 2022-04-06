import { Component,  OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../user';

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
    private route : Router,
    private user : User
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
    var booleans: boolean[] = [this.showUnameMessage, this.showPwordMessage];
    this.user.username = this.uname.toUpperCase();
    this.user.password = this.pword;

    this.userService.login(this.user).subscribe(obj => { this.user = obj; });
    if(this.user.username == this.uname.toUpperCase() && !booleans.includes(true)) {
      this.userService.setUser(this.user);
      this.route.navigate(['/dashboard']);
    } else if(!booleans.includes(true)) {
      this.showMessage = true;
    }
  }

}
