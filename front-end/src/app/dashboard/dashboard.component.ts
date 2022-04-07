import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: User = this.userService.currUser? this.userService.currUser : {user_id: 0, username: "Default", password: 'pass', fName: "", lName: "", email: ""};
  // user!: User;

  constructor(private userService : UserService) {}

  ngOnInit(): void {
    // this.userService.getCurrUser().subscribe( (obj: User) => {this.user = obj; return this.user;} )
  }
}
