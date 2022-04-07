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
  user!: User;

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
    var booleans: boolean[] = [this.showUnameMessage, this.showPwordMessage];
    this.userService.setUser(this.uname, this.pword)
    setTimeout( () => this.route.navigate(['/dashboard']), 100)
    /* this.userService.login(this.uname.toUpperCase(), this.pword).subscribe(
      (obj: User) => {
        this.user = obj;
        if(obj == null) {
          this.showMessage = true;
        }
        else {
          // this.userService.setUser(this.user);
          this.route.navigate(['/dashboard']);
        }
      }
    ) */
  }

}
