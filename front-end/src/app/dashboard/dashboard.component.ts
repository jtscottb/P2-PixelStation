import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: User = this.userService.currUser? this.userService.currUser : {user_id: 0, username: "Default", password: 'pass', fname: "", lname: "", email: ""};

  constructor(private userService : UserService) {}

  ngOnInit(): void {}
}
