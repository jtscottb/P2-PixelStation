import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showMessage: boolean = false;
  showUnameMessage: boolean = false;
  showPwordMessage: boolean = false;
  uname: string = '';
  pword: string = '';

  constructor(private userService : UserService,) { }

  ngOnInit() {}

  onSubmit() {
    this.showMessage = false;
    this.showUnameMessage = false;
    this.showPwordMessage = false;
    if (this.uname === '') {
      this.showUnameMessage = true;
    }
    if (this.pword === '') {
      this.showPwordMessage = true;
    }
    this.userService.setUser(this.uname, this.pword);
   /*  this.userService.login(this.uname, this.pword).subscribe(
      (obj: User) => {
        if(obj == null) {
          this.showMessage = true;
        } else {
          this.showMessage = false;
          this.userService.setUser(this.uname, this.pword);
        }
        return this.showMessage;
      }
    ); */
  }
}
