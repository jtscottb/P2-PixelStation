import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService : UserService, private route : Router) { }

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
    var booleans: boolean[] = [this.showUnameMessage, this.showPwordMessage];
    if(!booleans.includes(true)) {
      this.userService.login(this.uname, this.pword).subscribe(
        (obj: User) => {
          if(obj == null || obj == undefined) {
            this.showMessage = true;
          } else if(obj.isAdmin){
            this.route.navigate(['/admin']);
          } else {
            this.route.navigate(['/dashboard']);
          }
          return this.showMessage;
        }
      );
    }
  }
}
